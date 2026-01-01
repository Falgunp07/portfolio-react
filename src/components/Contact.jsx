import Reveal from "./Reveal";

function Contact() {
  return (
    <Reveal>
      <section id="contact" className="section">
        <h2>Contact</h2>

        <p>Email: falgunpatel071@gmail.com</p>
        <p>Location: Pune, India</p>

        <div className="links">
          <a
            href="https://github.com/Falgunp07"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/falgun-patel-7386701b0"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </Reveal>
  );
}

export default Contact;
