const router = require('koa-router')();
const userRouter = require('../controllers/user');
const testMiddle = require('../middlewares/test')

router.get('/', testMiddle, userRouter.get);

router.post('/', userRouter.add);

module.exports = router;
