import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase
      .from("emails") // 👈 your table name in Supabase
      .insert([{ email }]);

    if (error) {
      setMessage("❌ Error: " + error.message);
    } else {
      setMessage("✅ Email saved successfully!");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
        Submit
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
