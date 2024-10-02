import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import { Separator } from "./ui/separator"


const MobileNavLinks = () => {
    const {logout}=useAuth0()
  return (
    <div >
       <Link to="/user-profile" className="flex bg-white font-bold text-xl items-center hover:text-gray-900">
         Profile
       </Link>
       <Separator/>
       <Button
               
               className="flex w-full mt-2 items-center font-bold bg-gray-600 hover:bg-gray-800"
               onClick={()=>logout()}
               >
                Log out
              </Button>
    </div>
  )
}

export default MobileNavLinks