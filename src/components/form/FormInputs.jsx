// FormInputs ( กรอกข้อความสั้น )

import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormInputs = ({ register, name, type, placeholder, errors }) => {

  return (

    <div>

      <Label htmlFor={name}>{name}</Label>

      <Input 
        {...register(name)}
        type={type} 
        placeholder={placeholder}
        className={ `${errors[name] && "bg-red-500"}` }
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-2">{errors[name].message}</p>)}

    </div>

  );
};

export default FormInputs;
