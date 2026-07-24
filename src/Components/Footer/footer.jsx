import logo from "../../assets/logo-footer.png";
import btnBg from "../../assets/Frame.png";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto p-4 rounded-xl bg-[#06091A] text-white pt-28 pb-6">
      <div className="max-w-7xl mx-auto px-5">

        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img src={logo} alt="Logo" className="w-24" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* About */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm text-gray-400 leading-6 max-w-xs mx-auto md:mx-0">
              We are a passionate team dedicated to providing the best
              services to our customers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Home</li>
              <li>• Services</li>
              <li>• About</li>
              <li>• Contact</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Subscribe</h2>

            <p className="text-sm text-gray-400 mb-5">
              Subscribe to our newsletter for the latest updates.
            </p>

            <div className="flex overflow-hidden rounded-xl bg-white">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-black outline-none text-sm"
              />

              <button
                style={{
                  backgroundImage: `url(${btnBg})`,
                }}
                className="bg-cover bg-center px-5 text-black font-semibold text-sm"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          ©2024 Your Company All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;