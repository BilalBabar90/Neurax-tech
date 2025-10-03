import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Use React Router instead of next/link

const navItems = [
  {
    name: "Services",
    href: "#",
    sub: ["Web Design", "Webflow Development", "SEO"],
  },
  {
    name: "Industries",
    href: "#",
    sub: ["Startups", "E-commerce", "SaaS"],
  },
  { name: "Portfolio", href: "/portfolio" },
  {
    name: "Resources",
    href: "#",
    sub: ["Blog", "Case Studies", "Guides"],
  },
];

export default function Header({
  logoText = "Neura X",
  ctaText = "Book a call",
  ctaHref = "/contact",
}) {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full flex items-center justify-center bg-grid">
      <div className="container flex items-center justify-center mx-auto p-3">
        <nav
          className={`flex items-center justify-center flex-col transition-all duration-300
            mx-4  // ✅ margin always applied
            ${sticky
              ? "rounded-xl shadow-lg bg-white/90 backdrop-blur-md md:w-fit w-[85%]"
              : "w-full"
            }`}
        >
          {/* Row */}
          <motion.div
            className="max-w-[1200px] w-full mx-auto px-6 py-3 flex items-center flex-wrap"
            layout
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              justifyContent: sticky ? "center" : "space-between",
              gap: sticky ? "64px" : "32px",
            }}
          >
            {/* Logo */}
            <motion.div layout>
              <Link to="/" className="flex items-center gap-2 shrink-0">
                <span className="text-orange-500 text-2xl font-bold">
                  {logoText}
                </span>
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <motion.nav
              className="hidden md:flex gap-6 items-center relative"
              layout
            >
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setDropdown(item.name)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 flex items-center gap-1"
                  >
                    {item.name}
                    {item.sub && <ChevronDown size={14} />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.sub && dropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-40 py-2 z-40"
                      >
                        {item.sub.map((subItem, idx) => (
                          <Link
                            key={idx}
                            to="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.nav>

            {/* CTA */}
            <motion.div className="hidden md:flex items-center" layout>
              <Link
                to={ctaHref}
                className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-full text-white bg-orange-500 hover:bg-orange-600 transition"
              >
                {ctaText}
              </Link>
            </motion.div>

            {/* Mobile Toggle */}
            <button
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              onClick={() => setOpen((o) => !o)}
            >
              <motion.div
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </button>
          </motion.div>

          {/* Mobile Nav */}
          <AnimatePresence>
            {open && (
              <motion.div
                className="md:hidden w-full"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                style={{ overflow: "hidden" }}
              >
                <motion.div
                  className="bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="max-w-[1200px] mx-auto px-6 py-4">
                    <div className="flex flex-col gap-2 mb-4">
                      {navItems.map((item) => (
                        <div key={item.name}>
                          <div
                            className="flex items-center justify-between cursor-pointer px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-lg"
                            onClick={() =>
                              setDropdown(
                                dropdown === item.name ? null : item.name
                              )
                            }
                          >
                            {item.name}
                            {item.sub && <ChevronDown size={16} />}
                          </div>

                          {/* Mobile Dropdown */}
                          <AnimatePresence>
                            {item.sub && dropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="ml-6 mt-2 space-y-2"
                              >
                                {item.sub.map((subItem, idx) => (
                                  <Link
                                    key={idx}
                                    to="#"
                                    className="block text-sm text-gray-600 hover:text-orange-500"
                                    onClick={() => setOpen(false)}
                                  >
                                    {subItem}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                    <div>
                      <Link
                        to={ctaHref}
                        onClick={() => setOpen(false)}
                        className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full font-semibold text-white bg-orange-500 hover:bg-orange-600 transition"
                      >
                        {ctaText}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
