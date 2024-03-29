import { Router } from 'express';
import { signin, signup } from '../controllers/auth';


const router = Router();

router.get('/signin', signin);
router.post('/signup', signup);

export default router;
