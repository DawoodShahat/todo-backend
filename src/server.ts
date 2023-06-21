import express from 'express'
import { protect } from './modules/auth'
import router from './router'
import cors from 'cors'
import { createAccount, getMe, signIn } from './handlers/user';

const app = express();

app.use(cors({ origin: '*'}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api', protect, router)
app.get('/account/me', protect, getMe);
app.post('/account/signin', signIn);
app.post('/account/register', createAccount);

app.use((err, req, res, next) => {
  console.log(err)
  res.json({message: `had an error: ${err.message}`})
})

export default app