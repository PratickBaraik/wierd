import WorkSection from "../../components/organisms/work/WorkSection";
import Navbar from "../../components/molecule/Navbar";
import Footer from "../../components/molecule/Footer";

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
      <Navbar brand="PK Portfolio" links={navLinks} />

      {/* Work showcase section */}
      <WorkSection />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Works;
