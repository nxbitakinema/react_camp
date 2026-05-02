import { Button } from "@/components/ui/button";
import { Rotate3d } from "lucide-react";



const Buttons = ({ text, isPending, type, variant = "default" }) => {

  return (

    <Button 
        type={type} 
        variant={variant}
        className="w-full mt-2"
        disabled={isPending}
    >
        
      { isPending ? <> <Rotate3d className="animate-spin" /> <span>please wait</span> </>  : <p>{text}</p> }

    </Button>
    
  );
};

export default Buttons;
