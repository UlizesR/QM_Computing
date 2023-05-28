import { db } from "../src/utils/db.server";

type User = {
    email: string;
    username: string;
    password: string;
}

type Chat = {
    name: string;
    messages?: Message[];
}

type Message = {
    text: string;
    author: string;
}

async function seed() {
    await Promise.all(
        get_users().map(user => {
            return db.user.create({
                data: {
                    email: user.email,
                    username: user.username,
                    password: user.password
                }
            })
        })
    )

    const user = await db.user.findFirst({
        where: {
            username: "uler314"
        }
    })
    if (!user) {
        return
    }
    await Promise.all(
        get_chats().map(chat => {
            const { name, messages } = chat;
            return db.chat.create({
                data: {
                    name,
                    userId: user.id
                }
            })
        })   
    )

    const chat = await db.chat.findFirst({
        where: {
            name: "Chat 1"
        }
    })
    if (!chat) {
        return
    }
    await Promise.all(
        get_messages().map(message => {
            const { text, author } = message;
            return db.message.create({
                data: {
                    text,
                    author,
                    chatId: chat.id
                }
            })
        })
    )
}

seed()

function get_users(): Array<User> {
    return [
        {
            email: "uler314@gmail.com",
            username: "uler314",
            password: "123456"
        },
        {
            email: "jane271@gmail.com",
            username: "jane271",
            password: "123456"
        },
        {
            email: "jon3212@gmail.com",
            username: "jon3212",
            password: "123456"
        },
    ]
}

function get_chats(): Array<Chat> {
    return [
        {
            name: "Chat 1"

        },
        {
            name: "Chat 2"
        },
        {
            name: "Chat 3"
        },
    ]
}

function get_messages(): Array<Message> {
    return [
        {
            text: "Hello world!",
            author: "uler314"
        },
        {
            text: "How are you?",
            author: "uler314"
        },
        {
            text: "I'm fine, thanks!",
            author: "uler314"
        },
    ]
}