  import React, { useState } from "react";
import axios from "axios";
import mail from '../images/amongus.png'
import gsap from "gsap";
import Swal from 'sweetalert2'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)
const Contact = () => {
  useGSAP(()=>{
    const t6 = gsap.timeline({
      scrollTrigger: {
          trigger: '#contact',
          start: 'top center',
          end: '85% bottom',
          scrub: true,
      }
  })
  t6.from('#contacthead',{
    y:200,
    opacity:0,
    duration:0.2
  })
  t6.from('#emailimg',{
    y:200,
    opacity:0
  })
  t6.from('#form',{
    y:200,
    opacity:0
  })
  })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Show loading state
    Swal.fire({
      title: 'Sending...',
      text: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  
    setIsSubmitting(true);
    setResponseMessage("");
    
    try {
      const response = await axios.post("https://portbackend-8va9.onrender.com/api/send-email", formData);
      
      // Success alert
      await Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your message has been sent successfully',
        confirmButtonColor: '#3085d6'
      });
  
      setResponseMessage(response.data.success || "Email sent successfully!");
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
  
    } catch (error) {
      // Error alert
      const errorMessage = error.response?.data?.error || "Failed to send email. Please try again later.";
      
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
        confirmButtonColor: '#d33'
      });
  
      setResponseMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="h-full w-full lg:px-10 px-4 pb-10">
      <h1 className="text-center text-4xl font-extrabold my-6 text-black animate__animated animate__fadeInDown" id="contacthead">
        Contact
      </h1>
      <div className="border rounded-xl shadow-xl w-full h-full lg:p-10 p-2 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div  id="emailimg" className="flex justify-center items-center">
            <img src={mail} alt="" className="lg:size-96 size-56  lg:opacity-40 opacity-100" />
        </div>
        <div
          className="lg:p-5 p-0"
        >
          <form onSubmit={handleSubmit} className="space-y-3" id="form">
           
            <div id="forms">
              <label htmlFor="name" className="block text-black  mb-2 font-medium ms-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500  mb-2"
                placeholder="Enter your name"
                required
              />
            </div>

           
            <div id="forms">
              <label htmlFor="email" className="block text-black font-medium ms-2  mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500  mb-2"
                placeholder="Enter your email"
                required
              />
            </div>

           
            <div id="forms">
              <label htmlFor="phone" className="block text-black font-medium ms-2  mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500  mb-2"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div id="forms">
              <label htmlFor="message" className="block text-black font-medium ms-2  mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500  mb-2"
                placeholder="Enter your message"
                rows="4"
                required
              />
            </div>

            
            <button id="forms"
              type="submit"
              className="w-full p-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-green-400 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {responseMessage && (
            <div
              className={`mt-4 p-4 text-center rounded ${
                responseMessage.includes("successfully")
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              } animate__animated animate__fadeInUp`}
            >
              {responseMessage}
            </div>
          )}
        </div>
      </div>
      <br /><br />
      </div>
    </div>
  );
};

export default Contact;

