import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {name,email,phone};

    try {
      const response = await fetch(
        "https://my-ecomm-demo-app-default-rtdb.firebaseio.com/eCommUser.json",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to store contact data.");
      }

      console.log("Contact data stored successfully.");

      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error storing contact data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:<input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label><br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label><br />
      <label>
        Phone: <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label> <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
