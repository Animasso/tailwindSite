import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <footer className=" max-container">
      <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className=" flex flex-col items-start">
          <a href="/" />
          <img src={footerLogo} alt="logo" width={150} height={46} />
          <p className=" mt-6 text-base font-montserrat leading-7 text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike stoe .Find
            Your perfect Size In Store.Get Rewards.
          </p>
          <div className=" flex items-center mt-8 gap-8">
            {socialMedia.map((social) => (
              <div
                key={social.alt}
                className=" flex items-center justify-center w-12 h-12 bg-white rounded-full "
              >
                <img src={social.src} height={24} width={24} alt={social.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-1 lg:gap-10 gap-20 flex-wrap justify-between ">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className=" text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className=" mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex text-white-400 mt-24 max-sm:flex-col max-sm:items-center justify-between">
        <div className=" flex flex-1 justify-start items-center font-montserrat cursor-pointer gap-2">
          <img
            src={copyrightSign}
            alt="copyright icon"
            width={20}
            height={20}
            className=" rounded-full m-0"
          />
          <p> Copyright .All rights reserved.</p>
        </div>
        <p className=" font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
