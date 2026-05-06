import { useForm } from "react-hook-form";
import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/schemas";
import Buttons from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import Mainmap from "@/components/map/Mainmap";
import axios from "axios";


const Profile = () => {

    // register, handleSubmit, formState, setValue เป็นคำสั่งของ useForm
    const { register, handleSubmit, formState, setValue } = useForm();

    const { errors, isSubmitting } = formState;

    const testXxxxxSumit = async(data) => {

    // ทดสอบหน่วงเวลา 3 วิ
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log(data);

    await axios.post('http://localhost:5000/api/profile',data)
    .then((res) => {
        console.log(res.data.message);
    })
    .catch((err) => {
        console.log("nx error นะ", err.response.data.message);
    })

  };


  return (
    <section>

      <h1 className="capitalize text-2xl font-semibold mb-4">create profile</h1>

      <div className="border p-8 ">
        
        {/*   onSubmit, handleSubmit เป็นคำสั่งของ useForm   */}
        <form onSubmit={handleSubmit(testXxxxxSumit)}>

          <div className="grid md:grid-cols-2 gap-4 mt-4">

            <FormInputs
              register={register}
              name="firstname"
              type="text"
              placeholder="input your firstname"
              errors={errors}
            />

            <FormInputs
              register={register}
              name="lastname"
              type="text"
              placeholder="input your lastname"
              errors={errors}
            />

          </div>

          <Buttons text="clear form" isPending={isSubmitting} type="reset" variant="ghost" />
          <Buttons text="create profile" isPending={isSubmitting} type="submit"/>

        </form>
      </div>
    </section>
  );
};


export default Profile