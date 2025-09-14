import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase
      .from("emails") //  your table name in Supabase
      .insert([{ email }]);

    if (error) {
      setMessage(" Error: " + error.message);
    } else {
      setMessage(" Email saved successfully!");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3 max-w-full sm:max-w-md mx-auto px-2">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 sm:p-3 rounded text-base sm:text-lg"
      />
      <button type="submit" className="bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded text-base sm:text-lg">
        Submit
      </button>
      {message && <p className="text-xs sm:text-base mt-1">{message}</p>}
    </form>
  );
}

