import { CircleUserRound, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import MobileNavLinks from "./MobileNavLinks"



const MobileNav = () => {
  const {loginWithRedirect,isAuthenticated,logout,user}=useAuth0()
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500"/>
        </SheetTrigger>

        <SheetContent className=" space-y-3">
            <SheetTitle>
               {
                isAuthenticated?
                <span className="flex items-center font-bold text-gray-500 ">
                  <img src={user?.picture} className="mr-2"/>
                 
                  {user?.name}
                </span>
                :
                <span>
                Welcome! To MernEats.com
                </span>
               }
            </SheetTitle>

            <SheetDescription className="flex flex-col gap-4 ">
            {
              isAuthenticated?
              <MobileNavLinks/>
              :
              <Button
               
               className="flex-1 font-bold bg-orange-500 hover:bg-orange-800"
               onClick={async ()=> await loginWithRedirect()}
               >
                Log In
              </Button>
            }
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav