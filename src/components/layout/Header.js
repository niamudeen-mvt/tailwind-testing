import React, { useState } from "react";
import { menuItems } from "../../utils/menu-items";
import { CustomButton } from "../shared/Button";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import CustomContainer from "./Container";
import CustomModal from "../shared/CustomModal";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <CustomContainer>
      <header className="h-[120px] flex justify-between items-center ">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-x-3">
              <FaCircleHalfStroke className="text-blue-600 h-10 w-10" />
              <p className="text-lg">
                Tax<span className="text-blue-600 font-bold">Pal</span>
              </p>
            </a>

            <nav className="hidden md:block">
              <ul className="flex justify-between items-center gap-x-6">
                {menuItems.map(({ id, path }) => {
                  return (
                    <li className="rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 capitalize cursor-pointer">
                      <a href={path}>{id}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-x-5 md:gap-x-8">
            <p className="rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 capitalize hidden md:block cursor-pointer">
              Signin
            </p>
            <CustomButton text={"Get Started Today"} />
            {showModal ? (
              <IoCloseSharp
                className="cursor-pointer md:hidden h-5 w-5 z-50"
                onClick={() => setShowModal(!showModal)}
              />
            ) : (
              <AiOutlineMenu
                className="cursor-pointer md:hidden h-5 w-5 z-50"
                onClick={() => setShowModal(!showModal)}
              />
            )}
          </div>
        </div>
      </header>

      {showModal ? (
        <CustomModal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
    </CustomContainer>
  );
};

export default Header;
