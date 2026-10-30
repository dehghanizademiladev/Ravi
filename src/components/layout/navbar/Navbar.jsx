import { useState } from "react";

import Container from "../../common/container";
import Logo from "./Logo";
import NavItems from "./NavItems";
import SearchBar from "../../common/SearchBar";
import Search from "./Search";
import NavShopCard from "./NavShopCard";
import NavFavoritedItems from "./NavFavoritedItems";
import NavProfile from "./NavProfile";
import HamburgerButton from "./HamburgerButton";
import CloseButton from "./CloseButton";
import MobileMenu from "./MobileMenu";
import clsx from "clsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const drawerHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const searchHandler = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="border-b border-border bg-Background">
      <Container size="xl">

        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Logo className="size-14 lg:size-16" />

          {/* Desktop */}
          <div className="hidden flex-1 items-center justify-center gap-10 lg:flex">
            <NavItems className="flex flex-1 justify-around" />

            <SearchBar className="mx-4 w-full max-w-sm scale-100 opacity-100" />
          </div>
          <div className={` lg:hidden w-100 opacity-0 duration-300 -z-1 -translate-x-14.5 ${isSearchOpen&&" opacity-100 translate-x-2.5 z-10"}`}>
            <SearchBar />
          </div>
          {/* Actions */}
          <div className="flex items-center gap-3 lg:gap-4">

            {/* Mobile Search */}
            <Search
              className="lg:hidden"
              searchHandler={searchHandler}
            />

            <NavShopCard />

            <NavFavoritedItems />

            <NavProfile />

            {/* Hamburger */}
            <div className="lg:hidden">
              {isOpen ? (
                <CloseButton handler={drawerHandler} />
              ) : (
                <HamburgerButton handler={drawerHandler} />
              )}
            </div>

          </div>

        </nav>

        {/* Mobile Search */}
        
          

        {/* Overlay */}
        {isOpen && (
          <div
            onClick={closeMenu}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />
        )}

        {/* Mobile Menu */}
        <MobileMenu
          className={clsx(
            "fixed right-0 top-0 z-50 h-screen w-72 bg-Background shadow-xl transition-transform duration-300",
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          )}
        />

      </Container>
    </header>
  );
}

export default Navbar;