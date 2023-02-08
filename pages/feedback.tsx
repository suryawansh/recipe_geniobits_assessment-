import Typo from "@/components/Typo";
import { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Feedback: ", feedback);
  };

  return (
    <div className="container">
      <Typo fontFamily="Playfair Display" className="text-6xl font-bold mb-8">
        Feedback
      </Typo>
      <form className="pb-16" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border border-black p-2 w-full rounded-lg"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-black p-2 w-full rounded-lg"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="feedback">
            Feedback
          </label>
          <textarea
            className="border border-black p-2 w-full rounded-lg"
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
