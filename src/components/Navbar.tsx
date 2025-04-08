
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Home, User, Code2, FolderGit2, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Scroll behavior
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-portfolio-700">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ThemeToggle />
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={cn(
                  "relative py-2 text-foreground transition-colors duration-200 flex items-center gap-2",
                  activeSection === link.href.substring(1)
                    ? "text-portfolio-600 font-medium"
                    : "hover:text-portfolio-600",
                  "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-portfolio-600",
                  "after:transform after:scale-x-0 after:transition-transform after:duration-300",
                  activeSection === link.href.substring(1) && "after:scale-x-100"
                )}
              >
                {link.title === "Home" && <Home size={18} />}
                {link.title === "About" && <User size={18} />}
                {link.title === "Skills" && <Code2 size={18} />}
                {link.title === "Projects" && <FolderGit2 size={18} />}
                {link.title === "Contact" && <Mail size={18} />}
                {link.title}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleMenuToggle}
              className="hover:bg-portfolio-100"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <div className="px-4 py-2">
              <ThemeToggle />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={cn(
                  "block py-2 px-4 rounded-lg transition-all duration-200 flex items-center gap-2",
                  activeSection === link.href.substring(1)
                    ? "bg-portfolio-50 text-portfolio-600 font-medium"
                    : "hover:bg-portfolio-50 hover:text-portfolio-600"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title === "Home" && <Home size={18} />}
                {link.title === "About" && <User size={18} />}
                {link.title === "Skills" && <Code2 size={18} />}
                {link.title === "Projects" && <FolderGit2 size={18} />}
                {link.title === "Contact" && <Mail size={18} />}
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
