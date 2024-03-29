import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/product';
import { userById } from '../controllers/user';
import { checkAuth, isAuth, requireSingin } from '../middleware/checkAuth';

const router = Router();

router.get('/products', list);
router.get('/product/:id', get);
router.post('/products/:userId', requireSingin, isAuth , create);
router.delete('/product/:id', remove);
router.put('/product/:id', update);

router.param("userId", userById)
export default router;
