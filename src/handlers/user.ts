import mongoose from 'mongoose';
import { User } from '../models/user'
import { comparePasswords, createJWT, hashPassword } from '../modules/auth'

export const getMe = async (req, res) => {
  const user = await User.findById(req.user.id, { password: 0 });
  res.json({ data: user });
}

export const createAccount = async (req, res) => {
  const { name, password, email } = req.body;
  const user = await User.findOne({
    email
  })

  if(user){
    res.status(422);
    return res.json({ message: 'User already exists!'})
  }

  const newUser = await User.create({
      _id: new mongoose.Types.ObjectId(),
      name,
      password: await hashPassword(password),
      email: email
  });

  const token = createJWT(newUser)
  res.json({ data: { token }});
}

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email
  })

  if(!user){
    res.status(401)
    return res.json({message: 'Invalid Credentials'})
  }

  const isValid = await comparePasswords(password, user.password)

  if (!isValid) {
    res.status(401)
    return res.json({message: 'Invalid Credentials'})
  }

  const token = createJWT(user)
  res.json({ data: { token, user }});
}