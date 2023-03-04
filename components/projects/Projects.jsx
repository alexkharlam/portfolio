import ProjectItem from "./ProjectItem";

const projects = [
  {
    id: "reelrate",
    title: "ReelRate",
    themeDescription:
      "Web App, where you can search for movies, rate them and manage your rates",
    techDescription: "Next.js, Redux, MovieDatabase API",
    imgPath: "/reelrate.png",
    webLink: "https://reelrate-beta.netlify.app/",
    gitHubLink: "https://github.com/alexkharlam/reelrate-beta",
  },
  {
    id: "arteo",
    title: "Arteo",
    themeDescription: "Website of fictional vocal school",
    techDescription:
      "HTML, Scss, JavaScript. Has a lot of interesting ui elements like slider, dropdown menu, popup, all built with only JavaScript",
    imgPath: "/arteo.png",
    webLink: "https://arteo.netlify.app/",
    gitHubLink: "https://github.com/alexkharlam/arteo",
  },
  {
    id: "alexkharlam",
    title: "Portfolio Website",
    themeDescription: "Website you are surfing now)",
    techDescription:
      "Next.js website, styling with TailWind, dark/light theme functionality built with TailWind",
    imgPath: "/kharlam.png",
    webLink: "/",
    gitHubLink: "https://github.com/alexkharlam/portfolio",
  },
  {
    id: "sufy",
    title: "Sufy",
    themeDescription: "Website, where you can add and manage your notes",
    techDescription:
      "Built only with JavaScript, CSS and HTML. To manage state and make updating UI convinient, used MVC architecture pattern",
    imgPath: "/sufy.png",
    webLink: "https://sufy.netlify.app/",
    gitHubLink: "https://github.com/alexkharlam/sufy",
  },
];

function Projects() {
  return (
    <main className="container mx-auto px-2 py-3.5">
      <h1 className="mb-4 text-4xl font-semibold">Portfolio projects</h1>

      <ul>
        {projects.map((proj, idx) => {
          const even = idx % 2 === 0;
          return (
            <ProjectItem reverse={even} key={proj.id} projectData={proj} />
          );
        })}
      </ul>
    </main>
  );
}

export default Projects;
