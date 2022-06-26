import { Popover, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { Fragment } from "react";
import Link from "next/link";

const businessStreams = [
  {
    name: "Restructuring Employment",
    href: "/restructuring-employment",
  },
  {
    name: "Governmental Consulting",
    href: "/governmental-consulting",
  },
];

const BusinessStreamsPopover = () => {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center   px-3 py-2 text-base font-semibold text-ci-blue-0 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Business Streams</span>
              <BiChevronDown
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 min-w-max  -translate-x-1/2 transform px-4 sm:px-0 ">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-white p-7 ">
                    {businessStreams.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="-m-3  p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                          <div className="ml-4">
                            <p className="text-sm font-semibold text-gray-900">
                              {item.name}
                            </p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default BusinessStreamsPopover;
