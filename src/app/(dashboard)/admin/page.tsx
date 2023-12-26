import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"


const page = async () => {
  const session = await getServerSession(authOptions)
// console.log(session)

if(session?.user) {
  return(
    <h2 className="text-2xl">Admin page: welcome back to admin page <b>{session?.user.username}</b></h2>
  )
}


  return(
    <h2 className="text-2xl">Please log into admin page to view admin Dashboard</h2>
  )
  

}

export default page