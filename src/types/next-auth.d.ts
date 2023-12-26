
import NextAuth from "next-auth"

declare module "next-auth" {

    interface User{
        username:string
    }
 
  interface Session {
    user: User & {
        usename: string
    }
    token:{
        username: string
    }
  }
}