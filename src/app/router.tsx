import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Works from "../pages/work/Work";
import Contact from "../pages/contact/Contact";
import GearList from "../pages/gear/Gear";
import About from "../pages/about/About";
import NotFound from "../pages/notFound/NotFound";
import DroneProject from "../pages/project/droneProject/DroneMain";
import PhotoProject from "../pages/project/photoProject/PhotoMain";
import CineProject from "../pages/project/cineProject/CineMain";
import ClubMain from "../pages/club/ClubMain";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gearlist" element={<GearList />} />
      <Route path="/about" element={<About />} />
      <Route path="/drone" element={<DroneProject />} />
      <Route path="/photo" element={<PhotoProject />} />
      <Route path="/cine" element={<CineProject />} />
      <Route path="/club" element={<ClubMain />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
