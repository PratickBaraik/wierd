import NavBar from "../../components/molecule/Navbar";
import Footer from "../../components/molecule/Footer";

type NavItem = {
  label: string;
  href: string;
};

const GearList = () => {
  const navLinks: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/works" },
    { label: "Gearlist", href: "/gearlist" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <NavBar brand="PK Portfolio" links={navLinks} />
      <Footer />
    </>
  );
};

export default GearList;
