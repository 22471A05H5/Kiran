import { useEffect, useRef, useState } from "react";
import { Film, Youtube, Clapperboard, Music } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Reels & Shorts",
    description:
      "High-impact vertical content optimized for Instagram, TikTok, and YouTube Shorts. Designed to stop the scroll.",
  },
  {
    icon: Youtube,
    title: "YouTube Editing",
    description:
      "Professional long-form editing with dynamic pacing, motion graphics, and retention-focused storytelling.",
  },
  {
    icon: Clapperboard,
    title: "Cinematic Videos",
    description:
      "Promotional films, brand documentaries, and commercial content with a cinematic visual approach.",
  },
  {
    icon: Music,
    title: "Sound & Color",
    description:
      "Professional color grading, sound design, and audio mixing to elevate your content to the next level.",
  },
];

const ServicesSection = () => {
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
    <section id="services" ref={sectionRef} className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground text-glow">
            Services
          </h2>
          <p className="mt-4 text-muted-foreground font-body font-light max-w-xl mx-auto">
            Comprehensive video editing solutions tailored to your creative vision
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 md:p-10 bg-card border border-border/50 rounded-lg card-glow card-glow-hover transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <service.icon
                size={40}
                strokeWidth={1}
                className="text-foreground/70 mb-6 group-hover:text-foreground transition-colors duration-300"
              />
              <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
