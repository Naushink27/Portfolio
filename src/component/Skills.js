import { useEffect, useState } from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "100%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "90%" },
    { name: "React", level: "85%" },
    { name: "Tailwind CSS", level: "70%" },
    { name: "NodeJs", level: "10%" },
  ];

  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to trigger animations
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const { top } = skillsSection.getBoundingClientRect();
        if (top < window.innerHeight - 100) {
          setAnimateProgress(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="bg-gradient-to-br from-purple-50 to-blue-100 py-16 px-6 md:px-20"
      id="skills"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          My Skills
        </h2>

        {/* Skills List */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              {/* Skill Name */}
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </h3>
                <span className="text-sm text-gray-600">{skill.level}</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className={`bg-cyan-700 h-4 rounded-full transition-all duration-1000 ${
                    animateProgress ? "w-" + skill.level.replace("%", "") : "w-0"
                  }`}
                  style={{
                    width: animateProgress ? skill.level : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
