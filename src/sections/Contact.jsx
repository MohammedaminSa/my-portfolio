import { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    // Check internet connection
    if (!navigator.onLine) {
      setStatus("error");
      setIsSubmitting(false);
      alert("No internet connection. Please check your network and try again.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "a1ab159f-4fc1-4990-918a-ffa93cce3d91",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission from Portfolio",
          redirect: false,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-black dark:text-white px-4 sm:px-6 md:px-8 lg:px-12 py-16 transition-colors duration-300">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-center mb-4">
          <span className="bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-gray-800 dark:text-gray-300 text-sm sm:text-base mb-12 text-center max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Fill out the form
          below, and I'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Contact Information */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#F3F3F3] dark:bg-[#181818] rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-lg md:text-xl font-bold mb-6 bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
                Contact Information
              </h3>
              
              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-lg flex-shrink-0">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-1">Email</h4>
                  <a 
                    href="mailto:mhmmdmnsdk@gmail.com"
                    className="text-base md:text-lg text-black dark:text-white hover:text-[#3B82F6] transition-colors">
                    mhmmdmnsdk@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-lg flex-shrink-0">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-1">Phone</h4>
                  <a 
                    href="tel:+251935192050"
                    className="text-base md:text-lg text-black dark:text-white hover:text-[#3B82F6] transition-colors">
                    +251 93 519 2050
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-lg flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-1">Location</h4>
                  <p className="text-base md:text-lg text-black dark:text-white">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#F3F3F3] dark:bg-[#181818] rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-lg md:text-xl font-bold mb-6 bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/MohammedaminSa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center justify-center w-12 h-12 bg-white dark:bg-[#0D0D0D] border-2 border-[#3B82F6] rounded-lg text-[#3B82F6] text-2xl transition-all duration-300 hover:bg-[#3B82F6] hover:text-white hover:scale-110 shadow-md">
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/mohammedamin-sadik"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center justify-center w-12 h-12 bg-white dark:bg-[#0D0D0D] border-2 border-[#3B82F6] rounded-lg text-[#3B82F6] text-2xl transition-all duration-300 hover:bg-[#3B82F6] hover:text-white hover:scale-110 shadow-md">
                  <FaLinkedin />
                </a>
                <a
                  href="https://facebook.com/Kishira.kishira"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                  className="flex items-center justify-center w-12 h-12 bg-white dark:bg-[#0D0D0D] border-2 border-[#3B82F6] rounded-lg text-[#3B82F6] text-2xl transition-all duration-300 hover:bg-[#3B82F6] hover:text-white hover:scale-110 shadow-md">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#F3F3F3] dark:bg-[#181818] rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-6 bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-300">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="kishir sadik"
                  required
                  className="w-full p-3 md:p-3.5 rounded-lg bg-white dark:bg-[#0D0D0D] border border-gray-300 dark:border-[#3B82F6] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] text-sm md:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="kishir@example.com"
                  required
                  className="w-full p-3 md:p-3.5 rounded-lg bg-white dark:bg-[#0D0D0D] border border-gray-300 dark:border-[#3B82F6] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] text-sm md:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  className="w-full p-3 md:p-3.5 rounded-lg bg-white dark:bg-[#0D0D0D] border border-gray-300 dark:border-[#3B82F6] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] text-sm md:text-base resize-none"></textarea>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="p-3 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-300 text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-300 text-sm">
                  ✗ Failed to send message. Please try again or contact me directly via email.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
