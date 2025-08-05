import NetflixGPT from "../Assets/NetflixGPT.png"

import Devtinder from "../Assets/Devtinder.png"
import TODO from "../Assets/TODO.png"
import Weather from "../Assets/Weather.png"
import Currency from "../Assets/Currency.png"
import GoRail from "../Assets/GoRail.png"
import HealthCare from '../Assets/HealthCare.png'
const Projects = () => {
    const projects = [
      {
        id: 0,
        title: "GoRail",
        description: "Train Booking Application.",
        image:GoRail, // Replace with your project image URL
        link: "https://go-rail.vercel.app", // Replace with your app URL
      },
      {
        id: 2,
        title: "HealthCare",
        description: "Application Patient can book appointment with doctor and doctor can manage their appointments.",
        image: HealthCare, // Replace with your project image URL
        link: "https://healthcare-frontend-lake.vercel.app", // Replace with your app URL
      },
      {
        id: 1,
        title: "DevTinder",
        description: "Application where you can connect with other developers.",
        image: Devtinder, // Replace with your project image URL
        link: "https://devtinder-web-if8h.vercel.app", // Replace with your app URL
      },
      {
        id: 2,
        title: "Netflix GPT",
        description: "It shows all types of movies and also use gemini api to suggest movies based on the prompt",
        image: NetflixGPT, // Replace with your project image URL
        link: "https://net-flix-gpt-jet.vercel.app/", // Replace with your app URL
      },
      {
        id: 3,
        title: "TO DO Appliaction",
        description: "Todo application to manage Task.",
        image: TODO, // Replace with your project image URL
        link: "https://naushink27.github.io/TO-DO-LIST/", // Replace with your app URL
      },
      {
        id: 4,
        title: "Weather application",
        description: "Show all the weather detail of searched city.",
        image: Weather, // Replace with your project image URL
        link: "https://naushink27.github.io/Weather-FInal/", // Replace with your app URL
      },
      {
        id: 5,
        title: "Currency converter",
        description: "Converts Currency.",
        image: Currency, // Replace with your project image URL
        link: "https://naushink27.github.io/Currency-Converter/", // Replace with your app URL
      }
    ];
  
    return (
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-6 md:px-20" id="projects">
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
            My Projects
          </h2>
  
          {/* Cards Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                {/* Project Image */}
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover cursor-pointer"
                  />
                </a>
                {/* Project Details */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  