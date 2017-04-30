import express from 'express';

import App from '../../models/App';

const appApiRouter = express.Router();

appApiRouter.get('/', (req, res, next) => {
  App.findAll({ where: { isActive: true } })
    .then(apps => res.json(apps))
    .catch((err) => {
      next(err);
    });
});

appApiRouter.get('/:id', (req, res, next) => {
  App.find({ where: { id: req.params.id, isActive: true } })
    .then((app) => {
      if (!app) throw new Error('App not found');
      return res.json(app);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = appApiRouter;
