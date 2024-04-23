import 'dotenv/config';

import express from 'express';

import { router } from './app/router.js';

const app = express();

// mettre json avant le router !
app.use(express.json());

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
