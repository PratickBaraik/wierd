import NavBar from "../../../components/molecule/Navbar";
import Footer from "../../../components/molecule/Footer";
import CineMain from "../../../components/organisms/projects/cinema/VideoMain";

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
      <CineMain />
      <Footer />
    </>
  );
};

export default Project;
