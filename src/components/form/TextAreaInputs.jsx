import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

const TextAreaInput = ({ register, name, type, placeholder }) => {

  return (
    
    <div>

      <Label htmlFor={name}>{name}</Label>

      <Textarea 
        {...register(name)} 
        type={type} 
        placeholder={placeholder} 
        rows={5}
      />
      
    </div>
  );
};

export default TextAreaInput;
