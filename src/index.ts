import * as dotenv from 'dotenv'
dotenv.config()

import app from './server'
import { initializeDB } from './db';

const PORT = process.env.PORT || 3001;

initializeDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
}).catch(err => console.log('err', err));
