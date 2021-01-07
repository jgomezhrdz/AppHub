import { Request, Response } from 'express';
import pool from '../dbConnection/dbConnection';
var crypto = require('crypto');

class UserController {

    public async list(req: Request, res: Response): Promise<void> {
        const users = await pool.query('SELECT * FROM guest');
        res.json(users);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { username} = req.query;
        const user = await pool.query('SELECT * FROM guest WHERE username = ?', [username]);
        console.log(user.length);
        if (user.length > 0) {
            return res.json(user[0]);
        }
        res.status(404).json({ text: "The guest doesn't exits" });
    }

    public async login(req: Request, res: Response): Promise<any> {
        const { username, password} = req.query;
        const user = await pool.query('SELECT * FROM guest WHERE username = ? and password = ?', 
                                        [username, password]);
        console.log(user.length);
        console.log(req.query)

        if (user.length > 0) {
            return res.json({"token": crypto.randomBytes(64).toString('hex')});
        }
        res.status(404).json({ text: "The guest doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        try{
        const result = await pool.query('INSERT INTO guest set ?', [req.body])
        }
        catch (e) {
            console.error('Error Occurred', e);
          }
          console.log(req.body)
        res.json({ message: res.statusMessage });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { username } = req.query;
        await pool.query('UPDATE guest set ? WHERE username =  ?', [req.body, username]);
        res.json({ message: "The guest was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { username } = req.params;
        await pool.query('DELETE FROM user WHERE username = ?', [username]);
        res.json({ message: "The guest was deleted" });
    }
}

const userController = new UserController;
export default userController;