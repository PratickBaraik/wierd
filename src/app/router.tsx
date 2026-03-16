import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Works from "../pages/work/Work";
import Contact from "../pages/contact/Contact";
import GearList from "../pages/gearlist/GearList";
import Project from "../pages/project/Project";
import About from "../pages/about/About";
import NotFound from "../pages/notFound/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gearlist" element={<GearList />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
