import {
  FacebookLogoIcon,
  GoogleLogoIcon,
  InstagramLogoIcon,
  TelegramLogoIcon,
  WhatsappLogoIcon,
  YoutubeLogoIcon,
} from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className=" text-white py-10 px-6 text-center md:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="#schedule" className="hover:text-white">
                Schedule
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#payment" className="hover:text-white">
                Payment
              </a>
            </li>
            <li>
              <a href="#study-in-spain" className="hover:text-white">
                Study in Spain
              </a>
            </li>
            <li>
              <a href="#books" className="hover:text-white">
                Books
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white mb-4">About school</h3>
          <ul className="space-y-2">
            <li>
              <a href="#gallery" className="hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-white">
                News
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover:text-white">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white mb-4">Contact us</h3>
          <p>+1 (469) 918-4632</p>
          <p>hello@xpathedge.com</p>
        </div>
        <div>
          <h3 className="text-white mb-4">Follow us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#facebook" className="hover:text-white">
              <FacebookLogoIcon size={32} />
            </a>
            <a href="#google" className="hover:text-white">
              <GoogleLogoIcon size={32} />
            </a>
            <a href="#instagram" className="hover:text-white">
              <InstagramLogoIcon size={32} />
            </a>
            <a href="#youtube" className="hover:text-white">
              <YoutubeLogoIcon size={32} />
            </a>
            <a href="#whatsapp" className="hover:text-white">
              <WhatsappLogoIcon size={32} />
            </a>
            <a href="#telegram" className="hover:text-white">
              <TelegramLogoIcon size={32} />
            </a>
          </div>
          <h3 className="text-white mt-4 mb-2">Let's chat</h3>
          <p>110 W Randol Mill Rd Suite 230 Arlington, TX 76011</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>Copyright</p>
        <p>Privacy</p>
        <p className="text-gray-500 mt-2">© 2025 - Xpathedge</p>
      </div>
    </footer>
  );
};

export default Footer;
