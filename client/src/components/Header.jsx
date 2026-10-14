import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'For Students', href: '/student' },
    { label: 'For Teachers', href: '/teacher' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center group">
         
          <span className="text-xl font-extrabold tracking-tight text-dark-900">
            <span className="bg-lime-400 px-1">RPI</span><span className="text-brand-purple bg-amber-300 px-1">CST</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[20px] font-medium transition-colors ${
                idx === 0
                  ? 'text-brand-purple'
                  : 'text-dark-600 hover:text-brand-purple'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sign In Button */}
          <a
            href="#signin"
            className="px-5 py-2.5 text-sm font-semibold text-dark-900 border border-slate-300 hover:border-slate-400 rounded-full transition-colors"
          >
            সাইন ইন
          </a>

          {/* Registration Button (Purple Pill) */}
          <a
            href="#register"
            className="px-6 py-2.5 text-sm font-semibold text-white bg-brand-purple hover:bg-brand-purple-dark rounded-full transition-all shadow-md shadow-brand-purple/25"
          >
            রেজিস্ট্রেশন
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-dark-600 hover:text-dark-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-purple"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden border-t border-slate-100 bg-white/95 px-6 pt-4 pb-6 transition-all duration-200 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className={`py-2 text-base font-semibold transition-colors ${
                idx === 0
                  ? 'text-brand-purple'
                  : 'text-dark-600 hover:text-brand-purple'
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="#signin"
              className="w-full text-center py-2.5 text-sm font-semibold text-dark-900 border border-slate-300 rounded-full"
            >
              সাইন ইন
            </a>
            <a
              href="#register"
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-brand-purple rounded-full shadow-md shadow-brand-purple/20"
            >
              রেজিস্ট্রেশন
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;