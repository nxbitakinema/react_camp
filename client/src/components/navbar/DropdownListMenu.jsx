import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import UserIcon from "./UserIcon";
import { Button } from "../ui/button";
import { links } from "../../utils/links";
import { Link } from "react-router";
import {
  Show,
  SignInButton,
  SignInWithMetamaskButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/react";
import SignOutLink from "./SignOutLink";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Menu />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* {links.map((item, index) => {
          return (
            <DropdownMenuItem key={index}>
              <Link to={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          );
        })} */}

        <Show when="signed-out">
          <SignInButton mode="modal">
            <DropdownMenuItem>Login</DropdownMenuItem>
          </SignInButton>
        </Show>

        <Show when="signed-in">
          {links.map((item, index) => {
            return (
              <DropdownMenuItem key={index}>
                <Link to={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            );
          })}

          <SignOutButton>
            <DropdownMenuItem>
              <SignOutLink />
            </DropdownMenuItem>
          </SignOutButton>
        </Show>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
