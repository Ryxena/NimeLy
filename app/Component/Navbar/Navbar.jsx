"use client";
import React from "react";
import {
  Navbar as NextUInavbar,
  NavbarMenuItem,
  NavbarMenu,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Latest",
    "List Anime"
  ];

  return (
    <NextUInavbar nuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className='sm:hidden'
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className='font-bold text-inherit'>NimeLy</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='start'>
        <NavbarItem>
          <Link className="text-white" href='#' aria-current='page'>
            Latest Anime
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#' className="text-surfaceMixed-600">
            List Anime
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="bg-surfaceMixed-300" href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className='w-full'
              href='#'
              size='lg'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUInavbar>
  );
}
