import express, {Request, Response} from 'express';
import {body, validationResult} from 'express-validator';

import * as chatService from '../services/chat.service';

export const chatRouter = express.Router();

// GET: List all chats
chatRouter.get('/user/:id', async (req: Request, res: Response) => {
    try {
;
        const chats = await chatService.listChats(parseInt(req.params.id));
        return res.status(200).json(chats);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

// GET: Find a chat by id
chatRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const chat = await chatService.findChat(parseInt(req.params.id));
        if (!chat) {
            return res.status(404).json('Chat not found');
        }
        return res.status(200).json(chat);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

// GET: List all messages in a chat
chatRouter.get('/:id/messages', async (req: Request, res: Response) => {
    try {
        const messages = await chatService.listChatMessages(parseInt(req.params.id));
        if (!messages) {
            return res.status(404).json('Messages not found');
        }
        return res.status(200).json(messages);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

// POST: Create a new chat
// Params: name, userId
chatRouter.post('/', body('name').isString(), body('userId').isNumeric(), async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json('Invalid name or userId');
        }
        const chat = await chatService.createChat(parseInt(req.body.userId), req.body);
        return res.status(201).json(chat);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

// PUT: Update a chat by id
// Params: name
chatRouter.put('/:id', body('name').isString(), async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json('Invalid name');
        }
        const chat = await chatService.updateChat(parseInt(req.params.id), req.body.name);
        if (!chat) {
            return res.status(404).json('Chat not found');
        }
        return res.status(200).json(chat);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

// DELETE: Delete a chat by id
chatRouter.delete('/:id', body('id').isNumeric(), async (req: Request, res: Response) => {
    try {
        const chat = await chatService.deleteChat(parseInt(req.params.id));
        if (!chat) {
            return res.status(404).json('Chat not found');
        }
        return res.status(200).json(chat);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});