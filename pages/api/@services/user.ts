import { Prisma } from '@prisma/client'
import { prisma } from '@/commons/configs/prisma'

export const getAllUser = async () => {
  try {
    return prisma.user.findMany()
  } catch (error) {
    throw new Error("internal server error");
  }
}

export const getUserById = async (userId: number) => {
  try {
    return prisma.user.findUnique({ where: { id: userId } })
  } catch (error) {
    throw new Error("internal server error");
  }
}

export const createUser = async (data: Prisma.UserCreateInput) => {
  try {
    return prisma.user.create({ data })
  } catch (error) {
    throw new Error("internal server error");
  }
}

export const updateUser = async (id: number, data: Prisma.UserUpdateInput) => {
  try {
    return prisma.user.update({ where: { id }, data })
  } catch (error) {
    throw new Error("internal server error");
  }
}

export const deleteUser = async (id: number) => {
  try {
    return prisma.user.delete({ where: { id } })
  } catch (error) {
    throw new Error("internal server error");
  }
}