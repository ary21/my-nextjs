import { Prisma } from '@prisma/client'
import { prisma } from '@/commons/configs/prisma'

export const getAllUser = async () => {
  return prisma.user.findMany()
}

export const getUserById = async (userId: number) => {
  return prisma.user.findUnique({ where: { id: userId } })
}

export const createUser = async (data: Prisma.UserCreateInput) => {
  return prisma.user.create({ data })
}

export const updateUser = async (id: number, data: Prisma.UserUpdateInput) => {
  return prisma.user.update({ where: { id }, data })
}

export const deleteUser = async (id: number) => {
  return prisma.user.delete({ where: { id } })
}