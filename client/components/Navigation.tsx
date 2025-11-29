import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import log from  "./images/assets/cs-club-logo.jpg";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/resources", label: "Resources" },
    { path: "/problems", label: "Problems" },
    { path: "/join", label: "Join" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-bg border-b border-gold/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
              <img src={log} alt="CS Club Logo" className="logo" border-radius= "50%"/>
            <span className="text-xl font-bold text-gold">CS Club</span>
          </Link>
        
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0 bg-gradient-to-r from-dark-surface/30 to-transparent px-2 py-1 rounded-full border border-gold/20">
            {navLinks.map((link, index) => (
              <div key={link.path} className="flex items-center">
                <Link
                  to={link.path}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gold/70 hover:text-gold relative group transition-all duration-200"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full rounded-full transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gold/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-0"></div>
                </Link>
                {index < navLinks.length - 1 && (
                  <div className="w-px h-4 bg-gradient-to-b from-transparent via-gold/30 to-transparent mx-1"></div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gold hover:bg-gold/10 rounded-md transition-colors relative group"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-gold/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-0"></div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 bg-gradient-to-b from-dark-surface/50 to-transparent rounded-lg mt-2 border border-gold/20 px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-gold/70 hover:text-gold hover:bg-gold/10 transition-all duration-200 relative group"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full rounded-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
