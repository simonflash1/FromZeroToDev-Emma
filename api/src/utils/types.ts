import { Types } from "mongoose";

//TIPOS CURSO
export interface ICourse {
    user_id: Types.ObjectId;
    name: string;
    description: string;
    image: string;
    difficulty: string;
    duration: number;
    price: number;
    video: string;
    created_at: Date;
    updated_at: Date;
  }

//TIPOS USUARIOS
export interface IUser {
  email: string,
  password: string,
  username: string,
  lastname: string,
  image: string,
  firstname: string,
  favorites: string,
  created_at: Date,
  updated_at: Date
}
