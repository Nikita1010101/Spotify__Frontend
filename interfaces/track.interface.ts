import type { IUser } from "./user.interface"

export interface ITrack {
  id: number
  previewUrl: string
  title: string
  views: number
  duration: number
  userId: number 
  user: IUser
}