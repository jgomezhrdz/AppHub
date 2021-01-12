"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnection_1 = __importDefault(require("../dbConnection/dbConnection"));
var crypto = require('crypto');
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield dbConnection_1.default.query('SELECT * FROM guest');
            res.json(users);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = req.query;
            const user = yield dbConnection_1.default.query('SELECT * FROM guest WHERE username = ?', [username]);
            console.log(user.length);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: "The guest doesn't exits" });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.query;
            const user = yield dbConnection_1.default.query('SELECT * FROM guest WHERE username = ? and password = ?', [username, password]).then((user) => {
                if (user.length > 0) {
                    res.json({ "token": crypto.randomBytes(64).toString('hex'),
                        "res": "OK" });
                }
                else {
                    res.json({ "res": "ERR" });
                }
            }).catch(err => {
                res.json({ "res": "ERR" });
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dbConnection_1.default.query('INSERT INTO guest set ?', [req.body]).then(data => {
                res.json({ "res": "OK" });
            }).catch(err => {
                res.json({ "res": "ERR" });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = req.query;
            yield dbConnection_1.default.query('UPDATE guest set ? WHERE username =  ?', [req.body, username]);
            res.json({ message: "The guest was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = req.params;
            yield dbConnection_1.default.query('DELETE FROM user WHERE username = ?', [username]);
            res.json({ message: "The guest was deleted" });
        });
    }
}
const userController = new UserController;
exports.default = userController;
