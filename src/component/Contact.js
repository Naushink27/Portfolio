import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Check if all fields are filled
    if (name && email && message) {
      emailjs
        .send(
          "service_2rnaw4a",  // Replace with your service ID
          "template_03z80su",  // Replace with your template ID
          { name, email, message },
          "UZKBD2E78nEFXVQhc"       // Replace with your user ID
        )
        .then((response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          setStatus("Failed to send message. Please try again.");
        });
    } else {
      setStatus("All fields are required.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-lg font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Status */}
        {status && (
          <p
            className={`text-center mt-2 ${
              status.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
