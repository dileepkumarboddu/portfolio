import profile from "../assets/profile.jpeg";
import resume from "../assets/Dileep_Resume.pdf";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm Dileep Kumar Boddu</h1>

        <h3>Full Stack Developer | DevOps Enthusiast</h3>

        <p>
          I am a passionate Information Technology student with experience
          in Full Stack Development using React.js, Node.js, JavaScript,
          and MySQL. I enjoy building scalable web applications and am
          actively learning DevOps technologies such as Git, GitHub,
          Jenkins, Docker, Kubernetes, Firebase, and AWS.
        </p>

        <div className="hero-buttons">
          <a href={resume} download>
            <button>Download Resume</button>
          </a>

          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a href="#contact">
            <button>Contact Me</button>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Dileep Kumar Boddu" />
      </div>
    </section>
  );
}

export default Hero;