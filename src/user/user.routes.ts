import { Router, Request, Response } from 'express';
import { signup } from './user.controller';

const router = Router();

router.get('/signup', signup)


export default router;