import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

import { userRoutes } from './src/user/user.index';

app.get('/', (req: Request, res: Response) => {
    res.send('https://af3f-2401-4900-1c2c-55b7-c870-f9c3-885b-2670.ngrok-free.app');
});

app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
