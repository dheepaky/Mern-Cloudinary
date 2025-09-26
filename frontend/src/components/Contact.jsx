import { MdOutlineEmail, MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="border-separate border-amber-400 mt-72">
      <hr className="border-t border-gray-300 my-8" />
      <div className="py-10 text-center w-full">
        <h1 className="font-head font-bold">Get In Touch</h1>
        <p className="py-5 text-[18px] font-light text-gray-700">
          Open to collaborations, conversations, and creative possibilities —
          feel free to reach out to start a conversation
        </p>

        {/* Email Link */}
        <a
          href="mailto:deepakk300712@gmail.com"
          className="flex justify-center items-center py-2 gap-2 underline font-semibold text-gray-700">
          <MdOutlineEmail className="w-5 h-5" />
          <span>deepakk300712@gmail.com</span>
        </a>

        {/* Portfolio Text Link */}
        <a
          href="https://dheepaky-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center py-2 gap-2 underline font-semibold text-blue-700 hover:text-blue-900 transition">
          <FaGlobe className="w-5 h-5" />
          <span>Visit my portfolio</span>
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 py-4">
          <a
            href="https://www.linkedin.com/in/dheepaky"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin className="w-7 h-7 text-blue-600 hover:text-blue-800 transition" />
          </a>
          <a
            href="https://github.com/dheepaky"
            target="_blank"
            rel="noopener noreferrer">
            <FaSquareGithub className="w-7 h-7 text-gray-800 hover:text-black transition" />
          </a>
          <a href="mailto:deepakk300712@gmail.com">
            <MdOutlineMail className="w-7 h-7 text-red-500 hover:text-red-700 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
