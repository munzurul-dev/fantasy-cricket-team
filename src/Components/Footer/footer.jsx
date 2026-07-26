import logo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto p-3 rounded-xl bg-[#06091A] text-white pt-28 pb-6">
      <div className="max-w-7xl mx-auto px-5">

        
        <div className="flex justify-center mb-12">
          <img src={logo} alt="Logo" className="w-24" />
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm text-gray-400 leading-6 max-w-xs mx-auto md:mx-0">
              We are a passionate team dedicated to providing the best
              services to our customers.
            </p>
          </div>

          
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Home</li>
              <li>• Services</li>
              <li>• About</li>
              <li>• Contact</li>
            </ul>
          </div>

        
          <div>
            <h2 className="text-lg font-semibold mb-4">Subscribe</h2>

            <p className="text-sm text-gray-400 mb-5">
              Subscribe to our newsletter for the latest updates.
            </p>

            <div className="w-full max-w-xl mx-auto">
  <div className="flex flex-col md:flex-col lg:flex-row gap-3 lg:gap-0 w-full">
  <input
    type="email"
    placeholder="Enter your email"
    className="flex-1 px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none border-2 lg:border-white border-black rounded-xl lg:rounded-r-none"
  />

  <button
    className="bg-linear-to-r from-yellow-300 via-orange-300 to-pink-300
               px-6 py-3 font-semibold text-black
               rounded-xl lg:rounded-l-none
               transition-all duration-300 hover:brightness-105 active:scale-95"
  >
    Subscribe
  </button>
</div>
</div>
          </div>
        </div>

        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          ©2026 Your Company All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;