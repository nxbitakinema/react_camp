import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInputs";
import { useForm } from "react-hook-form";

const Camping = () => {

  const { register, handleSubmit } = useForm();

  const testSumit = (data) => {
    console.log(data);
    
  }

  return (

    <section>

      <h1 className="capitalize text-2xl font-semibold mb-4">create camping</h1>

      <div className="border p-8 ">

        <form onSubmit={ handleSubmit( testSumit ) }>

          <div className="grid md:grid-cols-2 gap-4 mt-4">

            <FormInputs 
                register={register} 
                name="title"
                type="text"
                placeholder="input your title"
            />

            <FormInputs 
                register={register} 
                name="price"
                type="number"
                placeholder="input your price"
            />
            
            <TextAreaInput 
                register={register} 
                name="description"
                type="text"
                placeholder="input your description"
            />

          </div>

            <button>submit</button>

        </form>
      </div>
    </section>
  );
};

export default Camping;
