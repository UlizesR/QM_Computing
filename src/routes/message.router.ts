import express, {Request, Response} from 'express';
import {body, validationResult} from 'express-validator';

import * as messageService from '../services/message.service';

export const messageRouter = express.Router();

// POST: Create a new message
// Params: text, author
messageRouter.post('/', body('text').isLength({min: 1}), body('author').isLength({min: 1}), async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json('Invalid text or author');
        }
        const message = await messageService.createMessage(parseInt(req.body.chatId), req.body);
        return res.status(201).json(message);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
})