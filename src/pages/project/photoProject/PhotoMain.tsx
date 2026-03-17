import GallerySection from "../../../components/organisms/projects/photo/GallerySection";
import Navbar from "../../../components/molecule/Navbar";
import Footer from "../../../components/molecule/Footer";

/**
 * Navigation item structure
 */
type NavItem = {
  label: string;
  href: string;
};

/**
 * Project Page
 * Displays portfolio work gallery
 */
const Works: React.FC = () => {
  /**
   * Navigation configuration
   * Same structure used in Home.tsx
   */
  const navLinks: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/works" },
    { label: "Gearlist", href: "/gearlist" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navigation */}
      <Navbar brand="Prakashit Kujur" links={navLinks} />

      {/* Project showcase section */}
      <GallerySection />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Works;
