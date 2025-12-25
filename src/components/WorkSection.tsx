import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

// Import project images
import brandCampaignImg from "@/assets/project-brand-campaign.jpg";
import musicVideoImg from "@/assets/project-music-video.jpg";
import documentaryImg from "@/assets/project-documentary.jpg";
import socialReelsImg from "@/assets/project-social-reels.jpg";
import productLaunchImg from "@/assets/project-product-launch.jpg";
import weddingImg from "@/assets/project-wedding.jpg";
import showreelPoster from "@/assets/showreel-poster.jpg";

const projects = [
  {
    title: "Brand Campaign",
    category: "Commercial",
    thumbnail: brandCampaignImg,
  },
  {
    title: "Music Video",
    category: "Creative",
    thumbnail: musicVideoImg,
  },
  {
    title: "Documentary",
    category: "Long Form",
    thumbnail: documentaryImg,
  },
  {
    title: "Social Reels",
    category: "Short Form",
    thumbnail: socialReelsImg,
  },
  {
    title: "Product Launch",
    category: "Commercial",
    thumbnail: productLaunchImg,
  },
  {
    title: "Wedding Film",
    category: "Cinematic",
    thumbnail: weddingImg,
  },
];

const WorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground text-glow">
            Selected Work
          </h2>
          <p className="mt-4 text-muted-foreground font-body font-light">
            A collection of my best projects
          </p>
        </div>

        {/* Showreel */}
        <div
          className={`relative mb-20 aspect-video bg-card rounded-lg overflow-hidden card-glow transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={showreelPoster}
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-background/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center">
              <Play size={32} className="text-foreground ml-1" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
            <p className="text-sm text-muted-foreground font-body uppercase tracking-widest">
              Showreel 2024
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative aspect-[4/3] bg-card rounded-lg overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 shadow-card-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mb-1">
                  {project.category}
                </p>
                <h3 className="font-heading text-2xl text-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
