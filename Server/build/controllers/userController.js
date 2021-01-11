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
            const users = yield dbConnection_1.default.query('SELECT * FROM user');
            res.json(users);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.query;
            const user = yield dbConnection_1.default.query('SELECT * FROM user WHERE email = ?', [email]);
            console.log(req);
            console.log(user.length);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: "The user does not exist" });
        });
    }
    exists(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.query;
            const user = yield dbConnection_1.default.query('SELECT EXISTS(SELECT * FROM user WHERE email = ?)', [email]);
            var returned = "EXISTS(SELECT * FROM user WHERE email = '" + email + "')";
            console.log(returned);
            if (user.length > 0) {
                return res.json(user[0][returned]);
            }
            res.status(404).json({ text: "The user does not exist" });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.query;
            const user = yield dbConnection_1.default.query('SELECT * FROM user WHERE email = ? and password = ?', [email, password]);
            console.log(user.length);
            console.log(req.query);
            if (user.length > 0) {
                return res.json({ "token": crypto.randomBytes(64).toString('hex') });
            }
            res.status(404).json({ text: "The guest doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dbConnection_1.default.query('INSERT INTO user set ?', [req.body]);
            res.json({ message: 'user Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.query;
            yield dbConnection_1.default.query('UPDATE user set ? WHERE email = ?', [req.body, email]);
            res.status(404).json({ text: "The user does not exist" });
            res.json({ message: "The user was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.query;
            yield dbConnection_1.default.query('DELETE FROM user WHERE email = "?"', [email]);
            res.json({ message: "The user was deleted" });
        });
    }
}
const userController = new UserController;
exports.default = userController;
