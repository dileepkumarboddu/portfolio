import resume from "../assets/Dileep_Resume.pdf";

function Resume() {
  return (
    <section id="resume">

      <h2>Resume</h2>

      <a href={resume} download>
        <button>
          Download Resume
        </button>
      </a>

    </section>
  );
}

export default Resume;