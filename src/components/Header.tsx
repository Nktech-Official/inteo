import React, { MouseEventHandler } from "react";
import Link from "next/link";

import Logo from "@/assets/logos/logo-dark.svg";
import Button from "./Button";
import Image from "next/image";

const Header = ({
  openModal,
}: {
  openModal: MouseEventHandler<HTMLButtonElement>;
}) => {
  const navigation = [
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Our Work", href: "#" },
  ];
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link href="/">
              <Image className="h-8 w-auto" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-4 items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Button onClick={openModal} label="CONTACT US" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
