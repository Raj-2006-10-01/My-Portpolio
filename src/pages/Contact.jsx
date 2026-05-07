import { useState } from "react";
import ParticalBackground from "../component/ParticalBackground";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Astra from "../assets/Astra.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;

    if (name === "budget" && value && !/^\d+$/.test(value)) {
      return;
    }

    setFormData((p) => ({ ...p, [name]: value }));

    if (errors[name]) {
      setErrors((p) => ({ ...p, [name]: "" }));
    }
  };

  const validateform = () => {
    const required = ["name", "email", "service", "idea"];
    const newError = {};

    required.forEach((f) => {
      if (!formData[f].trim()) {
        newError[f] = "Fill this feild";
      }
    });

    if (formData.service !== "other" && !formData.budget.trim()) {
      newError.budget = "Fill this feild";
    }

    setErrors(newError);
    return !Object.keys(newError).length;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!validateform()) {
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          from_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        idea: "",
      });
    } catch (error) {
      console.error("Emailjs error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <ParticalBackground />
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="w-full md:w-1/2 flex justify-center "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={Astra}
            alt="Content_photo"
            className="w-72 md:w-140 rounded-2xl shadow-lg object-cover "
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Let&apos;s work together</h2>

          <form className="flex flex-col gap-5 " onSubmit={handlesubmit}>
            <div className="flex flex-col ">
              <label className="mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handlechange}
                className={`p-3 rounded-md bg-white/10 border ${errors.name ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.name && <p className="text-red-500 text-xs ">{errors.name}</p>}
            </div>

            <div className="flex flex-col ">
              <label className="mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handlechange}
                className={`p-3 rounded-md bg-white/10 border ${errors.email ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.email && <p className="text-red-500 text-xs ">{errors.email}</p>}
            </div>

            <div className="flex flex-col ">
              <label className="mb-1">
                Service Needed <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handlechange}
                className={`p-3 rounded-md bg-white/10 border ${errors.service ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
              >
                <option value="" disabled className="text-black">
                  Something in mind ?
                </option>
                <option value="web devlopment" className="text-black">
                  Web devlopment
                </option>
                <option value="Mobile application" className="text-black">
                  Mobile Application
                </option>
                <option value="other" className="text-black">
                  Others
                </option>
              </select>
              {errors.service && <p className="text-red-500 text-xs ">{errors.service}</p>}
            </div>

            {formData.service && formData.service !== "other" && (
              <div className="flex flex-col">
                <label className="mb-1">
                  Budget <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="budget"
                  placeholder="Your budget"
                  value={formData.budget}
                  onChange={handlechange}
                  className={`p-3 rounded-md bg-white/10 border ${errors.budget ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
                />
                {errors.budget && <p className="text-red-500 text-xs ">{errors.budget}</p>}
              </div>
            )}

            <div className="flex flex-col">
              <label className="mb-1">
                Explain your idea <span className="text-red-500">*</span>
              </label>
              <textarea
                name="idea"
                rows={5}
                placeholder="Enter your idea"
                value={formData.idea}
                onChange={handlechange}
                className={`p-3 rounded-md bg-white/10 border ${errors.idea ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.idea && <p className="text-red-500 text-xs ">{errors.idea}</p>}
            </div>

            {status && (
              <p
                className={`text-sm ${status === "success" ? "text-green-400" : status === "error" ? "text-red-400" : "text-yellow-400"}`}
              >
                {status === "sending"
                  ? "sending..."
                  : status === "success"
                    ? "message sent successfully"
                    : "something went wrong"}
              </p>
            )}

            <motion.button
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-md font-semibold transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "sending"}
              type="submit"
            >
              {status === "sending" ? "sending" : "send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
