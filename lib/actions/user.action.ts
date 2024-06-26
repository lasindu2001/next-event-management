'use server'

import { CreateUserParams, UpdateUserParams } from "@/types"
import { connectToDatabase } from "../database"
import User from "../database/models/user.model"
import { handleError } from "../utils"

export async function createUser(user: CreateUserParams) {
    try {
        await connectToDatabase()
        const newUser = await User.create(user)
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        handleError(error)
    }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
    try {
      await connectToDatabase()
      const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })
      if (!updatedUser) throw new Error('User update failed')
      return JSON.parse(JSON.stringify(updatedUser))
    } catch (error) {
      handleError(error)
    }
  }