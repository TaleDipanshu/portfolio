import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaCode } from 'react-icons/fa'; 
import { HiMail } from 'react-icons/hi';
import { SiLeetcode } from "react-icons/si";
import { BackgroundLines } from '../components/ui/background-lines';
import { RiTwitterXLine } from "react-icons/ri";
const Contact = () => {
  return (
    <BackgroundLines className="relative z-10 flex items-center justify-center w-full flex-col px-4">
      <div className="min-h-screen flex flex-col  items-center mt-2 md:justify-center bg-black text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8">Social Links</h2>
        
        <div className="flex flex-col space-y-4 sm:space-y-6 w-full sm:w-auto px-2">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <HiMail className="text-2xl sm:text-3xl text-purple-500" />
            <a href="mailto:dipanshu.tale07@gmail.com" className="text-lg sm:text-xl hover:underline hover:text-purple-300">
              dipanshu.tale07@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <FaLinkedin className="text-2xl sm:text-3xl text-blue-500" />
            <a href="https://linkedin.com/in/dipanshu-tale" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl hover:underline hover:text-blue-300">
              linkedin.com/in/dipanshu-tale
            </a>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <FaGithub className="text-2xl sm:text-3xl text-gray-400" />
            <a href="https://github.com/TaleDipanshu" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl hover:underline hover:text-gray-300">
           github.com/TaleDipanshu
            </a>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <FaInstagram className="text-2xl sm:text-3xl text-pink-500" />
            <a href="https://instagram.com/dipanshu8411" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl hover:underline hover:text-pink-300">
              instagram.com/dipanshu8411
            </a>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <RiTwitterXLine className="text-2xl sm:text-3xl text-white" />
            <a href="https://twitter.com/DipanshuTale" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl hover:underline hover:text-blue-300">
              twitter.com/DipanshuTale
            </a>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <SiLeetcode className="text-2xl sm:text-3xl text-yellow-500" />
            <a href="https://leetcode.com/u/Dipanshu_tale/" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl hover:underline hover:text-green-300">
            leetcode.com/u/Dipanshu_tale/
            </a>
          </div>

          
        </div>
      </div>
    </BackgroundLines>
  );
};

export default Contact;
