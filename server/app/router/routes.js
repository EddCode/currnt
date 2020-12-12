import express from 'express'
import * as users from '../../src/User/user.service'
import * as views from '../../src/Views'

const router = express.Router()

router.get('/', views.Home)


router.get('/users', users.GetAll);
router.post('/users/', users.Store);
router.delete('/users/:id', users.DeleteById);
router.put('/users/:id', users.UpdateById);

export default router;