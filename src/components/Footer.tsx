import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 py-10 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-10 space-y-6 md:space-y-0">
        
        <div className="flex items-center space-x-8 text-3xl text-gray-700">
          <a href="https://github.com/ayesha-irfan0" target="_blank" className="hover:text-purple-600 transition-transform transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="http://www.linkedin.com/in/ayesha-irfan-3b2ab137a" target="_blank" className="hover:text-blue-600 transition-transform transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/share/1EQbUAT8A2/" target="_blank" className="hover:text-blue-500 transition-transform transform hover:scale-110">
            <FaFacebook />
          </a>
        </div>

        <p className="text-gray-700 text-center text-sm md:text-base font-medium">
          © {new Date().getFullYear()} All Rights Reserved | <span className="font-semibold text-purple-600">Ayesha Irfan</span>
        </p>
      </div>
    </footer>
  )
}
