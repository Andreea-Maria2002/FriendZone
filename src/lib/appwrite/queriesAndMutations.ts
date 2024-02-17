import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query'
import { createUserAccount, signOutAccount } from './api'
import { INewUser } from '../../types'

export const useCreateUserAccountMutation = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user)  })
}

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => signInAccount(user), })
}

export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => signOutAccount })
}