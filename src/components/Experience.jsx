import Reveal from "./Reveal";

function Experience() {
  return (
    <Reveal>
      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="card">
          <h3>Web Developer – Eduvertia</h3>
          <span>Jul 2024 – Aug 2024</span>
          <ul>
            <li>Built React components using hooks like useState and useEffect.</li>
            <li>Created a CRUD-based To-Do application with localStorage.</li>
            <li>Designed responsive UI using Tailwind CSS.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Website Developer – Freelancing</h3>
          <span>Jun 2025 – Oct 2025</span>
          <ul>
            <li>Developed a WooCommerce e-commerce website.</li>
            <li>Handled UI customization, SEO, and performance optimization.</li>
            <li>Integrated payments, security, and email systems.</li>
          </ul>
        </div>
      </section>
    </Reveal>
  );
}

export default Experience;
