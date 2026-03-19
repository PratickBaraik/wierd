import WorkSection from "../../components/organisms/work/WorkSection";
import Navbar from "../../components/molecule/Navbar";
import Footer from "../../components/molecule/Footer";
import ScrollToTop from "../../components/molecule/ScrollTop";

/**
 * Navigation item structure
 */
type NavItem = {
  label: string;
  href: string;
};

/**
 * Works Page
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

      {/* Work showcase section */}
      <WorkSection />

      {/* Footer */}
      <Footer />
      <ScrollToTop showAfter={500} />
    </>
  );
};

export default Works;
