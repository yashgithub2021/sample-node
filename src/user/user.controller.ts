import { Request, Response } from 'express';

export const signup = (req: Request, res: Response) => {
    const email = req.query.email;

    res.send({
        message: "User created successfully",
        email: email
    })
}
