import Image from "next/image";
import Link from "next/link";
import brandLogo from "/public/brand-logo.png";
import BusinessStreamsPopover from "./BusinessStreamsPopovers";

function Header() {
  return (
    <header className=" md:mx-16 xl:mx-64 py-6 ">
      <nav className=" flex justify-between ">
        <div className=" ">
          <Link href="/">
            <a className="flex gap-x-2 items-center">
              <Image
                className=""
                src={brandLogo}
                alt="brand logo"
                width={80}
                height={80}
              />
              <p className=" font-extrabold uppercase text-xl ">
                <span className=" text-ci-blue-0 pr-2">commercial</span>
                <span className=" text-ci-aqua-0 ">insights</span>
              </p>
            </a>
          </Link>
        </div>
        <ul className=" flex items-center justify-between font-semibold  gap-x-4 text-ci-blue-0 ">
          <li className="hover:text-ci-aqua-0 duration-300 transition-all ">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="">
            <BusinessStreamsPopover />
          </li>
          <li className="hover:text-ci-aqua-0 duration-300 transition-all ">
            <Link href="/faq">
              <a>FAQs</a>
            </Link>
          </li>
          <li className="hover:text-ci-aqua-0 duration-300 transition-all ">
            {" "}
            <Link href="/#">
              <a>Blog</a>
            </Link>
          </li>
          <li className="hover:text-ci-aqua-0 duration-300 transition-all ">
            <Link href="/#">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
