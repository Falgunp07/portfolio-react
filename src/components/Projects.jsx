import Reveal from "./Reveal";

function Projects() {
  return (
    <Reveal>
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>Edemy – LMS Platform</h3>
          <p>
            Developed a responsive e-learning platform UI using React and
            Tailwind CSS with secure authentication via Clerk. Deployed using
            CI/CD on Vercel.
          </p>
          <a
            href="https://mern-frontend-blue-one.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>

        <div className="card">
          <h3>Verse AI</h3>
          <p>
            Built a full-stack AI utility platform using the PERN stack with a
            centralized Node.js API gateway and role-based authentication.
          </p>
          <a
            href="https://verseaiuser.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </section>
    </Reveal>
  );
}

export default Projects;
