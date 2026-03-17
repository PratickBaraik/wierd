import { Link } from "react-router-dom";
import CineWork from "./assets/cinematics.jpg";
import PhotoWork from "./assets/photo.jpg";
import DroneWork from "./assets/drone.png";

/**
 * Work item type definition
 */
type WorkItem = {
  title: string;
  img: string;
  alt: string;
  link: string;
};

const WorkSection = () => {
  /**
   * Data-driven works array
   */
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
    <section className="w-full py-16 transition-colors duration-300">
      {/* Consistent Container */}
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h1
          className="
          text-center
          font-semibold
          leading-tight
          tracking-tight
          text-[clamp(2rem,3vw+0.5rem,3.8rem)]
          text-neutral-700
          dark:text-neutral-100
          transition-colors duration-300
          "
        >
          Body of Work
        </h1>

        {/* Work Grid */}
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
              overflow-hidden
              rounded-2xl
              aspect-[3/4]
              cursor-pointer
              block
              "
            >
              {/* Image */}
              <img
                src={work.img}
                alt={work.alt}
                className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-110
                "
              />

              {/* Adaptive Overlay */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/30
                to-transparent
                opacity-80
                transition-opacity
                duration-500
                group-hover:opacity-100
                "
              />

              {/* Title */}
              <div
                className="
                absolute
                bottom-0
                left-0
                right-0
                flex
                justify-center
                pb-8
                translate-y-10
                opacity-0
                transition-all
                duration-500
                ease-out
                group-hover:translate-y-0
                group-hover:opacity-100
                max-sm:translate-y-0
                max-sm:opacity-100
                "
              >
                <h2
                  className="
                  text-white
                  text-2xl
                  font-semibold
                  tracking-wide
                  backdrop-blur-sm
                  bg-black/40
                  px-6
                  py-2
                  rounded-full
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
