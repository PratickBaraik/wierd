import NavBar from "../../components/molecule/Navbar";
import Footer from "../../components/molecule/Footer";
import ContactMain from "../../components/organisms/contact/ContactMain";
import ScrollToTop from "../../components/molecule/ScrollTop";

type NavItem = {
  label: string;
  href: string;
};

const Contact = () => {
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
      <ContactMain />
      <Footer />
      <ScrollToTop showAfter={500} />
    </>
  );
};

export default Contact;
