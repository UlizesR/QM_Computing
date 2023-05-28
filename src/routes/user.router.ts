import express, {Request, Response} from 'express';
import {body, validationResult} from 'express-validator';

import * as userService from '../services/user.service';

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

// GET: Find a user by id
userRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const user = await userService.findUser(parseInt(req.params.id));
        if (!user) {
            return res.status(404).json('User not found');
        }
        return res.status(200).json(user);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

// POST: Create a new user
// Paramms: email, username, password
userRouter.post('/', body('email').isEmail(), body('password').isLength({min: 5}), async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json('Invalid email or password');
        }
        const user = await userService.createUser(req.body, req.body.password);
        return res.status(201).json(user);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
})

// PUT: Update a user by id
// Params: email, username, password
userRouter.put('/:id', body('email').isEmail(), body('password').isLength({min: 5}), async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json('Invalid email or password');
        }
        const user = await userService.updateUser(parseInt(req.params.id), req.body);
        if (!user) {
            return res.status(404).json('User not found');
        }
        return res.status(200).json(user);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

// DELETE: Delete a user by id
userRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const user = await userService.deleteUser(parseInt(req.params.id));
        if (!user) {
            return res.status(404).json('User not found');
        }
        return res.status(200).json(user);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});