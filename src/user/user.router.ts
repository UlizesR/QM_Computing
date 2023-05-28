import express, {Request, Response} from 'express';
import {body, validationResult} from 'express-validator';

import * as userService from './user.service';

export const userRouter = express.Router();

// GET: List all users
userRouter.get('/', async (req: Request, res: Response) => {
    try {
        const users = await userService.listUsers();
        return res.status(200).json(users);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
}); 