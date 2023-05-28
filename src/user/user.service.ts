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
            username: true
        },
    });
};