"use client";

import { useNavbarStore } from "@/hooks/useNavbarStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavbarItemProps {
  href: string;
  label?: string;
  children: React.ReactNode;
}

/**
 * Navbar button that navigates to a different page when clicked.
 * It also highlights the button when the user is on the page it links to.
 * The button is also highlighted when the user hovers over it.
 * @param to The path to navigate to when the navbar item is clicked
 * @param children The content to display inside the navbar item
 * @returns A navbar item component
 */
const NavbarItem: React.FC<NavbarItemProps> = ({ href, label, children }) => {
  const pathname: string = usePathname();
  const { isOpen: isOverlayOpen, close: closeOverlay } = useNavbarStore();

  /**
   * Handles the click event of the navbar item.
   * It closes the overlay and navigates to the page.
   */
  function handleClick() {
    if (isOverlayOpen) {
      closeOverlay();
    }
  }

  let isActive: boolean = pathname === href;

  const navbarItemStyle = `
    block lg:inline-block 
    ${isActive ? "font-bold" : "font-normal"} 
    text-neutral-900 dark:text-neutral-100 text-center
    md:dark:hover:text-neutral-200 
    px-4 md:px-2 lg:px-4 py-3 m-2 w-full md:w-26
    cursor-pointer 
    transition-all 
    duration-300 
    relative group
    overflow-hidden
    md:text-base text-xl
  `;

  return (
    <Link
      href={href}
      aria-label={
        label === "More" ? "More pages not displayed in Navbar" : label
      }
      className={navbarItemStyle}
      onClick={() => handleClick()}
    >
      {children}

      {/* Hover Underline */}
      <span
        className="
          w-full h-[3px]   
          rounded-full
          
          absolute 
          bottom-[2px]    
          left-0 inline-block 
          bg-blue-800 dark:bg-blue-500 
          -translate-x-[110%] md:group-hover:translate-x-0 transition-transform 
          duration-300"
      />
    </Link>
  );
};

export default NavbarItem;
