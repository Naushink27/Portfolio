const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-5xl mx-auto px-6 md:px-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <h3 className="text-2xl font-bold mb-4 md:mb-0">
            Naushin's Portfolio
          </h3>

          {/* Social Links */}
          <div className="flex space-x-6">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/naushink27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 text-xl transition duration-300"
              title="LinkedIn"
            >
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Naushink27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 text-xl transition duration-300"
              title="GitHub"
            >
              GitHub
            </a>

            {/* Email */}
            <a
              href="mailto:naushink2709@gmail.com"
              className="text-gray-400 hover:text-red-500 text-xl transition duration-300"
              title="Email"
            >
              Email
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; 2025 Naushin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
