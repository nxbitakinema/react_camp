import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/schemas";


const Camping = () => {

  // register, handleSubmit เป็นคำสั่งของ useForm
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(campingSchema),
  });

  const { errors } = formState
  console.log(errors);

  const testXxxxxSumit = (data) => {
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
          </div>

          <button>submit</button>
        </form>
      </div>
    </section>
  );
};

export default Camping;
