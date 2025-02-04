function Resume() {
    return (
      <section>
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <a href="/path-to-your-resume.pdf" download className="text-blue-600 underline">Download my resume</a>
        <h3 className="mt-4 text-2xl font-bold">Proficiencies</h3>
        <ul className="list-disc ml-5">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
        </ul>
      </section>
    );
  }
  
  export default Resume;
  