// FormInputs ( กรอกข้อความสั้น )

import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormInputs = ({ register, name, type, placeholder }) => {

  return (

    <div>

      <Label htmlFor={name}>{name}</Label>

      <Input 
        {...register(name)} 
        type={type} 
        placeholder={placeholder} 
      />

    </div>

  );
};

export default FormInputs;
