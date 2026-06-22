"use client";

import { useState } from "react";

type NavLink = { href: string; label: string };

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700"
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        onClick={() => setOpen(!open)}
      >
        Menu
      </button>
      {open && (
        <ul
          id="mobile-nav-menu"
          className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white px-4 py-3 shadow-md"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-sm font-medium text-slate-700 hover:text-brand-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
