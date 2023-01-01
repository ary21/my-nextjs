// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { API_METHOD } from '@/commons/constants'
import { User } from '@prisma/client';
import * as UserService from '../@services/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | null>
) {
  const { id } = req.query
  if (!id) {
    throw new Error('Missing id')
  }

  if (req.method === API_METHOD.PUT) {
    // PUT Update by Id request
    const user = await UserService.getUserById(+id);
    if (!user) {
      throw new Error('User not found')
    }

    const { name, email, phone } = req.body
    const updatedUser = await UserService.updateUser(user.id, { name, email, phone })
    res.status(200).json(user)
  } else if (req.method === API_METHOD.DELETE) {
    // PUT Update by Id request
    const user = await UserService.getUserById(+id);
    if (!user) {
      throw new Error('User not found')
    }

    await UserService.deleteUser(user.id)
    res.status(200).json(null)
  } else {
    // GET by Id
    const user = await UserService.getUserById(+id);
    res.status(200).json(user)
  }
}
