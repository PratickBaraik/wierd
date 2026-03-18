import { Link } from "react-router-dom";
import CineWork from "./assets/cinematics.jpg";
import PhotoWork from "./assets/photo.jpg";
import DroneWork from "./assets/drone.png";

/* ================================
   TYPES
================================ */
type WorkItem = {
  title: string;
  img: string;
  alt: string;
  link: string;
};

const WorkSection = () => {
  const works: WorkItem[] = [
    {
      title: "Cinematography",
      img: CineWork,
      alt: "Prakashit doing cinematography work",
      link: "/cine",
    },
    {
      title: "Photography",
      img: PhotoWork,
      alt: "Prakashit doing photography work",
      link: "/photo",
    },
    {
      title: "Drone Footage",
      img: DroneWork,
      alt: "Prakashit doing drone footage work",
      link: "/drone",
    },
  ];

  return (
    <section className="w-full py-16 bg-primary transition-colors duration-300">
      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl px-6">
        {/* ================================
           HEADING
        ================================ */}
        <h1
          className="
          text-center
          font-semibold
          leading-tight
          tracking-tight
          text-[clamp(2rem,3vw+0.5rem,3.8rem)]
          text-text-primary
          "
        >
          Body of Work
        </h1>

        {/* ================================
           GRID
        ================================ */}
        <div
          className="
          mt-14
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          mb-8
          py-8
          "
        >
          {works.map((work) => (
            <Link
              key={work.title}
              to={work.link}
              className="
              group
              relative
              isolate
              overflow-hidden
              rounded-2xl
              aspect-3/4
              block
              "
            >
              {/* IMAGE */}
              <img
                src={work.img}
                alt={work.alt}
                className="
                w-full h-full
                object-cover
                transition-transform duration-700 ease-out
                min-[1300px]:group-hover:scale-110
                "
              />

              {/* ================================
                 OVERLAY (TOKEN CONTROLLED)
              ================================ */}
              <div
                className="
                absolute inset-0
                bg-overlay-strong
                z-10

                opacity-100
                min-[1300px]:opacity-0
                min-[1300px]:group-hover:opacity-100

                transition-opacity duration-500
                "
              />

              {/* ================================
                 TITLE
              ================================ */}
              <div
                className="
                absolute inset-0
                flex items-end justify-center
                pb-8
                z-20

                opacity-100
                translate-y-0

                min-[1300px]:opacity-0
                min-[1300px]:translate-y-6
                min-[1300px]:group-hover:opacity-100
                min-[1300px]:group-hover:translate-y-0

                transition-all duration-500 ease-out
                "
              >
                <h2
                  className="
                  text-text-primary
                  text-2xl font-semibold
                  tracking-wide

                  bg-glass backdrop-blur-md
                  border border-border

                  px-6 py-2
                  rounded-full

                  min-[1300px]:group-hover:scale-105
                  transition-transform duration-300
                  "
                >
                  {work.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
