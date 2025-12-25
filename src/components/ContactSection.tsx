import { useEffect, useRef, useState } from "react";
import { Mail, Instagram, Youtube, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground text-glow mb-6">
            Let's Create Something
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-body font-light">
            Ready to bring your vision to life? Let's talk about your next project.
          </p>
        </div>

        {/* Email Button */}
        <div
          className={`mb-16 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="mailto:hello@editor.com"
            className="inline-flex items-center gap-3 px-10 py-4 border border-foreground text-foreground font-body font-light tracking-widest text-sm hover:bg-foreground hover:text-background transition-all duration-500"
          >
            <Mail size={20} strokeWidth={1.5} />
            GET IN TOUCH
          </a>
        </div>

        {/* Contact Information */}
        <div
          className={`mb-12 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-4 text-foreground font-body">
            <p className="text-lg font-medium">Sri Kiran Sai Yarramsetti</p>
            <a 
              href="mailto:srikiransaiyarramsetti@gmail.com" 
              className="block hover:text-foreground/80 transition-colors duration-300"
            >
              srikiransaiyarramsetti@gmail.com
            </a>
            <a 
              href="tel:9381503022" 
              className="block text-lg font-normal hover:text-foreground/80 transition-colors duration-300 font-['Times_New_Roman']"
            >
              +91 93815 03022
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div
          className={`flex justify-center gap-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="p-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <social.icon size={24} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          className={`mt-24 pt-8 border-t border-border/50 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-muted-foreground/60 font-body font-light">
            © 2025 Video Editor Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
