import { useForm } from "react-hook-form";
import Typo from '@/components/Typo';

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    // send data to server
  };

  return (
    <div className="container mx-auto my-10">
      <Typo fontFamily="Playfair Details" className="text-6xl font-bold text-center mb-4">Contact Us</Typo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-base font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            // ref={register({ required: true })}
            className={`border border-gray-400 p-2 w-full `}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-base font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-400 p-2 w-full"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-base font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="border border-gray-400 p-2 w-full"
            placeholder="Enter your message here"
            rows={5}
            required
          />
        </div>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
