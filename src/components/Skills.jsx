function Skills() {
  const skillList = [
    { title: "Frontend Web", desc: "HTML, CSS, JavaScript, React JS, Bootstrap", color: "bg-primary" },
    { title: "Backend & Logic", desc: "Node.js, Express.js, System Architecture", color: "bg-success" },
    { title: "IoT & Hardware", desc: "ESP8266 Microcontroller, Sensor Integration", color: "bg-warning text-dark" }
  ];

  return (
    <section id="skills" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Keahlian & Fokus</h2>
        <div className="row g-4">
          {skillList.map((skill, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className={`card-body p-4 rounded text-white ${skill.color}`}>
                  <h4 className="card-title fw-bold">{skill.title}</h4>
                  <p className="card-text mt-2">{skill.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;