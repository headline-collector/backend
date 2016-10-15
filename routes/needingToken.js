import { Router } from 'express';
import verifyToken from '../middlewares/verifyToken';
const router = new Router();

router.get('/', verifyToken, (req, res) => {

  // send the jwt claim directly
  const claim = req.decoded;
  res.json(claim);
});

export default router;
