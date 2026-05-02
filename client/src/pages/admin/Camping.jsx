import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/schemas";
import Buttons from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import Mainmap from "@/components/map/Mainmap";


const Camping = () => {

  // register, handleSubmit, formState, setValue เป็นคำสั่งของ useForm
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(campingSchema),
  });

  const { errors, isSubmitting } = formState;
  
  console.log(isSubmitting);

  const testXxxxxSumit = async(data) => {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log(data);

  };

  return (

    <section>

      <h1 className="capitalize text-2xl font-semibold mb-4">create camping</h1>

      <div className="border p-8 ">
        
        {/*   onSubmit, handleSubmit เป็นคำสั่งของ useForm   */}
        <form onSubmit={handleSubmit(testXxxxxSumit)}>

          <div className="grid md:grid-cols-2 gap-4 mt-4">

            <FormInputs
              register={register}
              name="title"
              type="text"
              placeholder="input your title"
              errors={errors}
            />

            <FormInputs
              register={register}
              name="price"
              type="number"
              placeholder="input your price"
              errors={errors}
            />

            <TextAreaInput
              register={register}
              name="description"
              type="text"
              placeholder="input your description"
              errors={errors}
            />

            <CategoryInput 
              name="category"
              register={register}
              setValue={setValue}
            />


          </div>

          

          <Mainmap 
            register={register}
            setValue={setValue}
          />

          

          <Buttons text="clear form" isPending={isSubmitting} type="reset" variant="ghost" />
          <Buttons text="create camping" isPending={isSubmitting} type="submit"/>

        </form>
      </div>
    </section>
  );
};

export default Camping;


// ///* 
//   สูตรการทำ Dropdown (Shadcn) + React Hook Form
  
//   สิ่งที่ต้องรับเข้ามา (Props):
//   1. name: ชื่อฟิลด์ (เช่น 'category', 'location')
//   2. register: เอาไว้ผูกกับ hidden input
//   3. setValue: เอาไว้ยัดค่ากลับเข้าไปตอนผู้ใช้เลือก Dropdown
  
//   โครงสร้างบังคับ:
//   - <input hidden {...register(name)} />  => เอาไว้จองพื้นที่รับข้อมูล
//   - <Select onValueChange={(value) => setValue(name, value)}> => ตัวแสดงผลและคอยจับ Event
// */

