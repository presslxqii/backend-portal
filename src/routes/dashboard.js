import {Router} from 'express';
import {getAll, getGraphs} from '../controllers/dashboard.js';

const router = Router();

router.route('/').get(getAll).post(getGraphs);;


export default router;
