import React from 'react';

const About = () => {
  return (
    <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-300 h-screen flex items-center overflow-hidden m-0">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white border-b-4 border-blue-500 inline-block pb-2">
            About Me
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mt-8">
          <div className="flex-shrink-0">
            <img
              src="/assets/images/perfil4.png"
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg border-4 border-blue-500"
            />
          </div>
          {/* Text Section */}
          <div className="space-y-6 max-w-2xl">
            <p className="leading-relaxed text-lg md:text-xl">
              My name is Joel, and I am a dedicated full stack developer passionate about creating exceptional user experiences. I have a strong foundation in front-end and back-end technologies. I am a hard-working individual who operates with integrity, accountability, and reliability. My keen observation skills, combined with my initiative and proactive approach, allow me to deliver high-quality web applications that meet and exceed user needs.
            </p>
            <p className="leading-relaxed text-lg md:text-xl">
              I enjoy working in the programming area because I can be open to the latest technological advancements and am always eager to learn and adapt to new platforms and software. My goal is to leverage my experience to develop unique and effective solutions that provide users with seamless and engaging experiences.
            </p>
            <p className="leading-relaxed text-lg md:text-xl">
              As a web developer, I am motivated by the opportunity to bring cutting-edge technologies to life, ensuring that they are accessible and functional for all users. I look forward to contributing my skills and enthusiasm to a forward-thinking team, where I can continue to grow and make a significant impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

