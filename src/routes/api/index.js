import express from 'express';

import apps from './apps';
import auth from './auth';
import drafts from './drafts';
import feedback from './feedback';
import user from './user';
import version from './version';
import search from './search';

const apiRouter = express.Router();

apiRouter.use('/apps', apps);
apiRouter.use('/auth', auth);
apiRouter.use('/drafts', drafts);
apiRouter.use('/feedback', feedback);
apiRouter.use('/user', user);
apiRouter.use('/version', version);
apiRouter.use('/search', search);

module.exports = apiRouter;
