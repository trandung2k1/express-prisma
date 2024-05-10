import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();
const app: Application = express();
const port = 5000;

async function main() {
    await prisma.$connect();
}
main()
    .catch((e) => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

app.get('/users', async (req: Request, res: Response) => {
    try {
        // const user = await prisma.user.findUnique({
        //     where: {
        //         email: 'trandungksnb00@gmail.com',
        //     },
        // });
        const users = await prisma.post.findMany();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error);
    }
});

app.get('/posts', async (req: Request, res: Response) => {
    try {
        const posts = await prisma.post.findMany();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json(error);
    }
});
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
