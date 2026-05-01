// TextAreaInput (กรอกข้อความยาว)

import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

const TextAreaInput = ({ register, name, type, placeholder, errors }) => {

  return (
    
    <div>

      <Label htmlFor={name}>{name}</Label>

      <Textarea 
        {...register(name)} 
        type={type} 
        placeholder={placeholder} 
        rows={5}
        className={ `${errors[name] && "bg-red-500"}` }
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-2">{errors[name].message}</p>)}

    </div>
  );
};

export default TextAreaInput;
