import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { cn } from "../utils/utils";

import { navigation } from "../constants";
import { brainwave } from "../assets";
import { MenuSvg } from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import Button from "./ui/Button";

export default function Header() {
  const location = useLocation();
  const [openSmallNav, setOpenSmallNav] = useState(false);

  const toggleSmallNav = () => setOpenSmallNav((open) => !open);
  const closeSmallNav = () => setOpenSmallNav(false);

  useEffect(
    function () {
      if (openSmallNav) {
        disablePageScroll();
      } else {
        enablePageScroll();
      }
    },
    [openSmallNav]
  );

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full z-50 border-b border-n-6",
        openSmallNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      )}
    >
      <div className="flex justify-between items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <div id="start">
          <a href="#hero" className="block w-[12rem] xl:mr-8">
            <img src={brainwave} alt="Brainwave logo" />
          </a>
        </div>

        <div id="center">
          <nav
            className={cn(
              "fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent",
              openSmallNav ? "flex" : "hidden"
            )}
          >
            <div className="relative z-2 flex flex-col justify-center items-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={closeSmallNav}
                  className={cn(
                    item.onlyMobile && "lg:hidden",
                    "block relative px-6 py-6 md:py-8 lg:mr-[-0.0625rem] xl:px-12 lg:leading-5 lg:hover:text-n-1",
                    "font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 lg:text-xs lg:font-semibold lg:text-n-1/50",
                    item.url === location.hash && "z-2 lg:text-n-1"
                  )}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HamburgerMenu />
          </nav>
        </div>

        <div
          id="end"
          className="flex justify-between items-center gap-4 lg:gap-8"
        >
          <a
            href="#"
            className="text-xs font-code font-bold uppercase tracking-wider hidden text-n-1/50 transition-colors hover:text-n-1 md:block"
          >
            New account
          </a>
          <Button type="colorful" className="hidden md:block">
            Sign In
          </Button>
          <Button
            type="colorful"
            onClick={toggleSmallNav}
            className="lg:hidden"
          >
            <MenuSvg open={openSmallNav} />
          </Button>
        </div>
      </div>
    </div>
  );
}
