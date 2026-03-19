import NavBar from "../../components/molecule/Navbar";
import Footer from "../../components/molecule/Footer";
import GearMain from "../../components/organisms/gear/GearMain";
import CameraSection from "../../components/organisms/gear/CameraSection";
import GimbleSection from "../../components/organisms/gear/GimbleSection";
import LightSection from "../../components/organisms/gear/LightSection";
import GearOverview from "../../components/organisms/gear/GearOverview";
import LensSection from "../../components/organisms/gear/LenseSection";
import DroneSection from "../../components/organisms/gear/DroneSection";

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
      <NavBar brand="Prakashit Kujur" links={navLinks} />
      <GearMain />
      <CameraSection />
      <LensSection />
      <GimbleSection />
      <DroneSection />
      <LightSection />
      <GearOverview />
      <Footer />
    </>
  );
};

export default GearList;
