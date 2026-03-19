import NavBar from "../../../components/molecule/Navbar";
import Footer from "../../../components/molecule/Footer";
import DroneMain from "../../../components/organisms/projects/drone/DroneMain";
import ScrollToTop from "../../../components/molecule/ScrollTop";

type NavItem = {
  label: string;
  href: string;
};

const Project = () => {
  const navLinks: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/works" },
    { label: "Gearlist", href: "/gearlist" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <NavBar brand="Prakashit Kujur" links={navLinks} />
      <DroneMain />
      <Footer />
      <ScrollToTop showAfter={500} />
    </>
  );
};

export default Project;
