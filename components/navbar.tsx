"use client";

import { Button } from "@/components/ui/button";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./theme/toggleTheme";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [menuIconVisible, setMenuIconVisible] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const modeToggleRef = useRef<HTMLDivElement>(null);

  const handleNavToggle = () => {
    setToggleNav((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target as Node) &&
      !modeToggleRef.current
    ) {
      setToggleNav(false);
    }
  };

  useEffect(() => {
    setMenuIconVisible(true);
    if (toggleNav) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleNav]);

  const handleLinkClick = () => {
    setToggleNav(false);
  };

  return (
    <div className="w-full h-auto items-center flex p-4 bg-white/80 shadow-md relative">
      <div className="w-1/4 flex items-center justify-start -mt-2">
        <Image src={logo} alt="logo" width={45} height={10} />
        <h1 className="text-3xl font-semibold text-gray-800 mt-2">Nexcent</h1>
      </div>
      <nav className="w-1/2 items-center justify-between hidden lg:flex text-gray-500">
        <Link href="#home" onClick={handleLinkClick}>
          <span>Home</span>
        </Link>
        <Link href="#service" onClick={handleLinkClick}>
          <span>Service</span>
        </Link>
        <Link href="#pixel-grade-1" onClick={handleLinkClick}>
          <span>Feature</span>
        </Link>
        <Link href="#count-menu" onClick={handleLinkClick}>
          <span>Product</span>
        </Link>
        <Link href="#testimonial" onClick={handleLinkClick}>
          <span>Testimonial</span>
        </Link>
        <Link href="#read-more" onClick={handleLinkClick}>
          <span>FAQ</span>
        </Link>
      </nav>
      <div className="w-1/4 hidden lg:flex items-center justify-end gap-x-6">
        <ModeToggle />
        <span className="text-primary">
          <button>Login</button>
        </span>
        <span>
          <Button className="text-white">Sign up</Button>
        </span>
      </div>
      {menuIconVisible && (
        <MenuIcon
          className="lg:hidden block ml-auto hover:cursor-pointer"
          onClick={handleNavToggle}
          sx={{ color: "black" }}
        />
      )}

      {toggleNav && (
        <nav
          ref={navRef}
          className="lg:hidden flex flex-col items-start gap-y-4 w-full absolute top-16 left-0 bg-white/80 text-gray-500 shadow-lg p-4 z-50"
        >
          <Link href="#home" onClick={handleLinkClick}>
            <span>Home</span>
          </Link>
          <Link href="#service" onClick={handleLinkClick}>
            <span>Service</span>
          </Link>
          <Link href="#pixel-grade-1" onClick={handleLinkClick}>
            <span>Feature</span>
          </Link>
          <Link href="#count-menu" onClick={handleLinkClick}>
            <span>Product</span>
          </Link>
          <Link href="#testimonial" onClick={handleLinkClick}>
            <span>Testimonial</span>
          </Link>
          <Link href="#read-more" onClick={handleLinkClick}>
            <span>FAQ</span>
          </Link>
          <div ref={modeToggleRef}>
            <ModeToggle />
          </div>
          <span className="text-primary">
            <button>Login</button>
          </span>
          <span>
            <Button className="text-foreground">Sign up</Button>
          </span>
        </nav>
      )}
    </div>
  );
}
