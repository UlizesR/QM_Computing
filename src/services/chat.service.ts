import { db } from "../utils/db.server";

type Chat = {
    id: number;
    name: string;
    messages?: Message[];
}

type Message = {
    text: string;
    author: string;
}

export const listChats = async (userId: number): Promise<Chat[]> => {
    return db.chat.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            name: true,
            userId: true,
        },
    });
};

export const findChat = async (id: number): Promise<Chat | null> => {
    return db.chat.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
        },
    });
}

export const createChat = async (userId: number, chat: Omit<Chat, 'id'>): Promise<Chat> => {
    const { name } = chat;

    return db.chat.create({
        data: {
            name,
            userId
        },
        select: {
            id: true,
            name: true,
        },
    });
}

export const updateChat = async (id: number, name: string): Promise<Chat | null> => {
    return db.chat.update({
        where: { id },
        data: { name },
        select: {
            id: true,
            name: true,
        },
    });
}

export const deleteChat = async (id: number): Promise<Chat | null> => {
    return db.chat.delete({
        where: { id },
        select: {
            id: true,
            name: true,
        },
    });
};

export const listChatMessages = async (chatId: number): Promise<Message[]> => {
    return db.message.findMany({
        where: {
            chatId
        },
        select: {
            text: true,
            author: true,
        },
    });
};