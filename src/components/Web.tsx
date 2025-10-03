import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from "react-router-hash-link"; // ✅ Smooth scroll

const navItems = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Vision 25-26", href: "#vision" },
  { name: "Case Studies", href: "#case_studies" },
  { name: "Contact", href: "#contact" },
];

export default function Header({
  logoText = "Neura X",
  ctaText = "Book a call",
  ctaHref = "#contact", // ✅ points to section
}) {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= -1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full flex items-center justify-center bg-grid">
      <div className="container flex items-center justify-center mx-auto p-3">
        <nav
          className={`flex items-center justify-center flex-col transition-all duration-300
            mx-4
            ${
              sticky
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
              <HashLink smooth to="#" className="flex items-center gap-2 shrink-0">
                <span className="text-orange-500 text-2xl font-bold">
                  {logoText}
                </span>
              </HashLink>
            </motion.div>

            {/* Desktop Nav */}
            <motion.nav className="hidden md:flex gap-6 items-center relative" layout>
              {navItems.map((item) => (
                <HashLink
                  key={item.name}
                  smooth
                  to={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 flex items-center gap-1"
                >
                  {item.name}
                </HashLink>
              ))}
            </motion.nav>

            {/* CTA */}
            <motion.div className="hidden md:flex items-center" layout>
              <HashLink
                smooth
                to={ctaHref}
                className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-full text-white bg-orange-500 hover:bg-orange-600 transition"
              >
                {ctaText}
              </HashLink>
            </motion.div>

            {/* Mobile Toggle */}
            <button
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              onClick={() => setOpen((o) => !o)}
            >
              <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
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
                        <HashLink
                          key={item.name}
                          smooth
                          to={item.href}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-lg"
                        >
                          {item.name}
                        </HashLink>
                      ))}
                    </div>
                    <div>
                      <HashLink
                        smooth
                        to={ctaHref}
                        onClick={() => setOpen(false)}
                        className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full font-semibold text-white bg-orange-500 hover:bg-orange-600 transition"
                      >
                        {ctaText}
                      </HashLink>
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
