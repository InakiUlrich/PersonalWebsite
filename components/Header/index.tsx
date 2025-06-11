import React from 'react'
import { NavigationType } from "./types";

const navigation: NavigationType[] = [
    { name: "Home", href: "/", id: 1 },
    { name: "About", href: "/about", id: 2 },
    { name: "Public Projects", href: "/public-projects", id: 3 },
    { name: "Contact", href: "/contact", id: 4 }
  ];

const Header = () => {
  return (
    <header className="header-container">
      <nav
        className="flex items-center justify-between p-6 lg:p-8"
        aria-label="Global"
      >
        {/* links */}
        <div className="flex gap-x-12">
          {navigation.map((item: NavigationType) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6"
            >
              {item.name}
            </a>
          ))}
        </div>
        </nav>
    </header>
  )
}

export default Header
