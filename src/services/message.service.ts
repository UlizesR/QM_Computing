import { db } from "../utils/db.server";

type Message = {
    text: string;
    author: string;
}

export const createMessage = async (chatId: number, message: Omit<Message, 'id'>): Promise<Message> => {
    const { text, author } = message;

    return db.message.create({
        data: {
            text,
            author,
            chatId
        },
        select: {
            text: true,
            author: true,
        },
    });
}