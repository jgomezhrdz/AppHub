import { Request, Response } from 'express';
import pool from '../dbConnection/dbConnection';

class UserController {

    public async list(req: Request, res: Response): Promise<void> {
        const users = await pool.query('SELECT * FROM guest');
        res.json(users);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { email, id } = req.params;
        const user = await pool.query('SELECT * FROM guest WHERE email = ? AND id = ?', [email, id]);
        console.log(user.length);
        if (user.length > 0) {
            return res.json(user[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO guest set ?', [req.body]);
        res.json({ message: 'user Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { email, id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE guest set ? WHERE id = ? and email =  ?', [req.body, id, email]);
        res.json({ message: "The user was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { email, id } = req.params;
        await pool.query('DELETE FROM user WHERE id = ? and email = ?', [id, email]);
        res.json({ message: "The game was deleted" });
    }
}

const userController = new UserController;
export default userController;