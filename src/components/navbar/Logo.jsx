import { Link } from "react-router"
import { Button } from "../ui/button"
const Logo = () => {
  return (
    <Button asChild>
      <Link to="/">LOGO</Link>
    </Button>
  )
}
export default Logo