import { Request, Response } from 'express';
import pool from '../dbConnection/dbConnection';
var crypto = require('crypto');

class UserController {

    public async list(req: Request, res: Response): Promise<void> {
        const users = await pool.query('SELECT * FROM user');
        res.json(users);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { email } = req.query;
        const user = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
        console.log(req)
        console.log(user.length);
        if (user.length > 0) {
            return res.json(user[0]);
        }
        res.status(404).json({ text: "The user does not exist" });
    }

    public async exists(req: Request, res: Response): Promise<any> {
        const { email } = req.query;
        const user = await pool.query('SELECT EXISTS(SELECT * FROM user WHERE email = ?)', [email]);
        var returned = "EXISTS(SELECT * FROM user WHERE email = '"+email+"')"
        console.log(returned)
        if (user.length > 0) {
            return res.json(user[0][returned]);
        }
        res.status(404).json({ text: "The user does not exist" });
    }

    public async login(req: Request, res: Response): Promise<any> {
        const { email, password} = req.query;
        const user = await pool.query('SELECT * FROM user WHERE email = ? and password = ?', 
                                        [email, password])
                                        .then((user)=>{
                                            if (user.length > 0) {
                                            res.json({"token": crypto.randomBytes(64).toString('hex'),
                                                        "res": "OK"});
                                            }
                                            else{
                                                res.json({ "res": "ERR" });
                                            }
                                        }
                                        ).catch(
                                            err =>{
                                                res.json({"res": "ERR"})
                                            }
                                        );
        
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO user set ?', [req.body]).then(
            data => {
                res.json({"res": "OK"})
            }
        ).catch(
            err =>{
                res.json({"res": "ERR"})
            }
        );
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { email } = req.query;
        await pool.query('UPDATE user set ? WHERE email = ?', [req.body, email]);
        res.status(404).json({ text: "The user does not exist" });
        res.json({ message: "The user was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { email } = req.query;
        await pool.query('DELETE FROM user WHERE email = "?"', [email]);
        res.json({ message: "The user was deleted" });
    }
}

const userController = new UserController;
export default userController;