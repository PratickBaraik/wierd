import NavBar from "../../components/molecule/Navbar";
import Footer from "../../components/molecule/Footer";
import AboutMain from "../../components/organisms/about/AboutMain";
import Education from "../../components/organisms/about/Education";
import Brands from "../../components/organisms/about/Organisation";
import { Hobbies } from "../../components/organisms/about/hobbies";
import ContactForm from "../../components/organisms/about/ContactForm";
import ScrollToTop from "../../components/molecule/ScrollTop";

type NavItem = {
  label: string;
  href: string;
};

const About = () => {
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
      <AboutMain />
      <Education />
      <Brands />
      <Hobbies />
      <ContactForm />
      <Footer />
      <ScrollToTop showAfter={500W} />
    </>
  );
};

export default About;
