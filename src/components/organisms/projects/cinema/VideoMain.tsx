import React from "react";

/* ================================
   Types (Scalable + Strict)
================================ */

type Video = {
  id: string;
  title: string;
  url: string;
};

type Section = {
  id: string;
  title: string;
  videos: Video[];
};

/* ================================
   Reusable Video Card
================================ */

const VideoCard: React.FC<Video> = ({ title, url }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Video Frame */}
      <div
        className="
          aspect-video
          overflow-hidden
          rounded-2xl
          bg-surface
          border border-border
          shadow-soft
          hover:shadow-medium
          transition-shadow duration-300
        "
      >
        <iframe
          src={url}
          title={title}
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Title */}
      <h3
        className="
          text-lg
          font-semibold
          text-primary
          text-center
          tracking-tight
        "
      >
        {title}
      </h3>
    </div>
  );
};

/* ================================
   Reusable Section Component
================================ */

const VideoSection: React.FC<Section> = ({ title, videos }) => {
  return (
    <section className="w-full py-16">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <h2
          className="
            text-2xl
            font-bold
            mb-10
            text-primary
            tracking-tight
          "
        >
          {title}
        </h2>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================================
   Main Component
================================ */

const VideoSections: React.FC = () => {
  const sections: Section[] = [
    {
      id: "section-1",
      title: "Travel Highlights",
      videos: [
        {
          id: "v1",
          title: "Loop Bridge, Bagrakot",
          url: "https://www.youtube.com/embed/X5NkZtdOwDg",
        },
        {
          id: "v2",
          title: "Beach Side",
          url: "https://www.youtube.com/embed/Eoo4HzILB-M",
        },
      ],
    },
    {
      id: "section-2",
      title: "Drone Shots",
      videos: [
        {
          id: "v3",
          title: "Mountain Aerial View",
          url: "https://www.youtube.com/embed/ysz5S6PUM-U",
        },
        {
          id: "v4",
          title: "City Drone Shot",
          url: "https://www.youtube.com/embed/jNQXAC9IVRw",
        },
      ],
    },
    {
      id: "section-3",
      title: "Cinematic Edits",
      videos: [
        {
          id: "v5",
          title: "Short Film Scene",
          url: "https://www.youtube.com/embed/tgbNymZ7vqY",
        },
        {
          id: "v6",
          title: "Night Cinematic",
          url: "https://www.youtube.com/embed/oUFJJNQGwhk",
        },
      ],
    },
    {
      id: "section-4",
      title: "Nature & Landscape",
      videos: [
        {
          id: "v7",
          title: "Forest Walk",
          url: "https://www.youtube.com/embed/ScMzIvxBSi4",
        },
        {
          id: "v8",
          title: "Waterfall View",
          url: "https://www.youtube.com/embed/kXYiU_JCYtU",
        },
      ],
    },
  ];

  return (
    <div className="bg-primary transition-colors duration-300">
      {sections.map((section) => (
        <VideoSection key={section.id} {...section} />
      ))}
    </div>
  );
};

export default VideoSections;
