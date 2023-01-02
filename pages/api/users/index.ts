// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@prisma/client';
import { API_METHOD } from '@/commons/constants'
import * as UserService from '../@services/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: User[]; } | User[] | User>
) {
  if (req.method === API_METHOD.POST) {
    // POST Create request
    const { name, email, phone } = req.body
    const user = await UserService.createUser({ name, email, phone })
    res.status(200).json(user)
  } else {
    // GET All request
    const users = await UserService.getAllUser();
    res.status(200).json({ data: users })
  }
}
