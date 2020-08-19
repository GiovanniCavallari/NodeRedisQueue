import express from 'express';
import BullBoard from 'bull-board';
import Queue from './lib/Queue';
import UserController from './controllers/UserController';

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.send('Application to test node queue with bull and redis');
});

routes.post('/users', UserController.store);

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));
routes.use('/admin/queues', BullBoard.UI);

export default routes;
