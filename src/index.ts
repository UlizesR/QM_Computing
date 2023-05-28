import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import { userRouter } from './routes/user.router';
import { chatRouter } from './routes/chat.router';
import { messageRouter } from './routes/message.router';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/chats', chatRouter);
app.use('/api/messages', messageRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});   