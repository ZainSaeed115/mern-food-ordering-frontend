import { CircleUserRound } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";


const UserNameMenu = () => {
    const {user,logout}=useAuth0();
  return (
   <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center px-3 text-bold gap-2 hover:text-orange-500">
      <CircleUserRound className="text-orange-500"/>
      {user?.name}
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>
      <Link to="/user-profile" className="text-bold hover:text-orange-500">
       Profile
      </Link>
      </DropdownMenuItem>
      <Separator/>
      <DropdownMenuItem>
       <Button 
        onClick={()=>logout()}
       className="flex flex-1 font-bold bg-orange-500">
        Log out
       </Button>
      </DropdownMenuItem>
    </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default UserNameMenu