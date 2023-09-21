"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.model"
import { DB } from "../mongoose"
interface Params {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
}
export async function updateUser({
    userId,
  bio,
  name,
  path,
  username,
  image,}:Params):Promise<void>{
   DB()
   try {
        await User.findOneAndUpdate({id:userId},
        {
            username:username.toLowerCase(),
            name,
            image,
            bio,
            onboarded:true
        },
        {upsert:true});
        if(path==='/profile/edit'){
            revalidatePath(path);
        }
   } catch (error:any) {
    throw new Error(`Failed to create/upate user:${error.message}`)
   }

}