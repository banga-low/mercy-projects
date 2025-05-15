import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "Submitting..." });

    try {
      const { data, error } = await supabase
        .from('contacts') // Replace 'contacts' with your table name
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) {
        throw error;
      }

      setSubmitStatus({ success: true, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({ success: false, message: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {submitStatus.message && (
          <p className={`text-center ${submitStatus.success ? "text-green-500" : "text-red-500"}`}>
            {submitStatus.message}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;