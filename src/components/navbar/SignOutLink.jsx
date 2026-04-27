import {
  Show,
  SignInButton,
  SignInWithMetamaskButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/react";
import { toast } from "sonner"

const SignOutLink = () => {

    //const { toast } = useToast()

    // const handleLogout = () => {
    //     toast('you are logout')
    // }
    
  return (
    <SignOutButton redirectUrl="/">
        <button onClick= { () => toast('you are logout') } >
            Logout
        </button>
    </SignOutButton>
  )
}
export default SignOutLink