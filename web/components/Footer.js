import { IoLogoTwitter } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-ci-aqua-0/20 md:px-16 xl:px-64 pt-16 pb-0 font-baloo">
      {" "}
      <div className=" flex flex-col gap-y-16">
        {" "}
        <div className="flex gap-x-12 justify-center ">
          <a
            href="https://twitter.com/ComIns2020"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" rounded-full p-4 bg-ci-blue-0 text-white ">
              <IoLogoTwitter size={24} />
            </div>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <div className=" rounded-full p-4 bg-ci-blue-0 text-white ">
              <FaPhoneAlt size={24} />
            </div>
          </a>
          <a
            href="https://www.instagram.com/commercialinsights/"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" rounded-full p-4 bg-ci-blue-0 text-white ">
              {" "}
              <BsInstagram size={24} />
            </div>
          </a>
          <a
            href="https://www.facebook.com/ComInsEducation
"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" rounded-full p-4 bg-ci-blue-0 text-white ">
              {" "}
              <ImFacebook size={24} />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/commercial-insights-a628711b9/
"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" rounded-full p-4 bg-ci-blue-0 text-white ">
              {" "}
              <FaLinkedinIn size={24} />
            </div>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <div className=" rounded-full p-4 bg-ci-blue-0 text-white ">
              <MdMailOutline size={24} />
            </div>
          </a>
        </div>
        <div>
          <ul className=" text-ci-blue-0 flex justify-center  font-medium ">
            <li className=" px-8 border-r-2 border-r-ci-blue-0 ">
              <a>About</a>
            </li>
            <li className=" px-8 border-r-2 border-r-ci-blue-0 ">
              <a>Business Streams</a>
            </li>
            <li className=" px-8 border-r-2 border-r-ci-blue-0 ">
              <a>FAQs</a>
            </li>
            <li className=" px-8 border-r-2 border-r-ci-blue-0 ">
              <a>Blog</a>
            </li>
            <li className=" px-8 border-r-2 border-r-ci-blue-0 ">
              <a>Contact</a>
            </li>
            <li className=" px-8 border-r-2 border-r-ci-blue-0 ">
              <a>Privacy Policy</a>
            </li>
            <li className=" px-8  border-r-ci-blue-0 ">
              <a>Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-24 mb-4 text-xl text-ci-gray-0">
        {" "}
        &copy; Commercial Insights LLC, 2022
      </p>
    </footer>
  );
};

export default Footer;
