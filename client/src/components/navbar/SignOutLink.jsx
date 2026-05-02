import { SignOutButton } from "@clerk/react";
import { toast } from "sonner"

const SignOutLink = () => {

  return (
    <SignOutButton redirectUrl="/">
        <button onClick= { () => toast('you are logout') } >
            Logout
        </button>
    </SignOutButton>
  )
}
export default SignOutLink