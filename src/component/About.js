const About = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-100 py-16 px-6 md:px-20" id="about">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: About Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Hi, I’m <span className="text-blue-600 font-semibold">Naushin Khan!</span> 
            A second-year B.Tech student specializing in Computer Science and Engineering at SSGB.
          </p>
          <p className="text-gray-700 mb-6">
            As a passionate frontend developer currently diving into backend development, I love creating dynamic and interactive web applications. 
            Over time, I’ve built several frontend applications and integrated them with Firebase for backend functionality, honing my technical and creative skills.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>HTML, CSS, JavaScript</li>
                <li>Bootstrap, React</li>
                <li>Firebase (learning)</li>
                <li>Microsoft Office</li>
              </ul>
            </div>
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
              <p className="text-gray-700">
                Pursuing B.Tech in Computer Science and Engineering at SSGB.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image or Illustration */}
        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt="About Illustration"
              className="w-72 h-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
