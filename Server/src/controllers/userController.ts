import { Request, Response } from 'express';
import pool from '../dbConnection/dbConnection';

class UserController {

    public async list(req: Request, res: Response): Promise<void> {
        const users = await pool.query('SELECT * FROM user');
        res.json(users);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { email } = req.params;

        const user = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
        console.log(user.length);
        if (user.length > 0) {
            return res.json(user[0]);
        }
        res.status(404).json({ text: "The user does not exist" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO user set ?', [req.body]);
        res.json({ message: 'user Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { email } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE user set ? WHERE email = ?', [req.body, email]);
        res.status(404).json({ text: "The user does not exist" });
        res.json({ message: "The user was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { email } = req.params;
        await pool.query('DELETE FROM user WHERE email = "?"', [email]);
        res.json({ message: "The user was deleted" });
    }
}

const userController = new UserController;
export default userController;