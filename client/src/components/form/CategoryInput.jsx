import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { categories } from "@/utils/categories";

const CategoryInput = ({ name, register, setValue }) => {
  return (
    <div className="mb-2">

      {/* hidden รับค่าจาก Select + required เช็คความถูกต้อง */}
      <input hidden {...register(name)} />

      <Label>{name}</Label>

      <Select
        onValueChange={ (value) => setValue(name, value) } required
      >

        <SelectTrigger className="w-full">
          <SelectValue placeholder="select category" />
        </SelectTrigger>

        <SelectContent>
          {categories.map((item) => {
            return (
              <SelectItem key={item.label} value={item.label}>
                {item.label}
              </SelectItem>
            );
          })}
        </SelectContent>
        
      </Select>

    </div>
  );
};

export default CategoryInput;
