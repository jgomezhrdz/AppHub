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
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield dbConnection_1.default.query('SELECT * FROM guest');
            res.json(users);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, id } = req.params;
            const user = yield dbConnection_1.default.query('SELECT * FROM guest WHERE email = ? AND id = ?', [email, id]);
            console.log(user.length);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: "The game doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield dbConnection_1.default.query('INSERT INTO guest set ?', [req.body]);
            res.json({ message: 'user Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, id } = req.params;
            const oldGame = req.body;
            yield dbConnection_1.default.query('UPDATE guest set ? WHERE id = ? and email =  ?', [req.body, id, email]);
            res.json({ message: "The user was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, id } = req.params;
            yield dbConnection_1.default.query('DELETE FROM user WHERE id = ? and email = ?', [id, email]);
            res.json({ message: "The game was deleted" });
        });
    }
}
const userController = new UserController;
exports.default = userController;