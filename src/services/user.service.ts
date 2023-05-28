import { db } from "../utils/db.server";

type User = {
    id: number;
    email: string;
    username: string | null;
    
}

export const listUsers = async (): Promise<User[]> => {
    return db.user.findMany({
        select: {
            id: true,
            email: true,
            username: true,
        },
    });
};

export const findUser = async (id: number): Promise<User | null> => {
    
    return db.user.findUnique({
        where: { id },
        select: {
            id: true,
            email: true,
            username: true,
        },
    });
}

export const createUser = async (user: Omit<User, 'id'>, password: string): Promise<User> => {
    const { email, username } = user;
    const alreadyExists = await db.user.findFirst({
        where: {
            email
        }
    });
    if (alreadyExists) {
        throw new Error('User already exists');
    }

    return db.user.create({
        data: {
            email,
            username,
            password
        },
        select: {
            id: true,
            email: true,
            username: true
        },
    });
}

export const updateUser = async (id: number, user: Partial<User>): Promise<User | null> => {
    return db.user.update({
        where: { id },
        data: user,
        select: {
            id: true,
            email: true,
            username: true,
        },
    });
}

export const deleteUser = async (id: number): Promise<User | null> => {
    return db.user.delete({
        where: { id },
    });
}