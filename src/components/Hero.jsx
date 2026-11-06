function Hero() {
  return (
    <section id="home" className="bg-light py-5 text-center border-bottom">
      <div className="container py-4">
        <h1 className="display-4 fw-bold text-dark">Halo, Saya Azis Steven S. Ance 👋</h1>
        <p className="lead text-muted mt-3">
          Junior Programmer & IoT Enthusiast | Web Development & Embedded Systems
        </p>
        <div className="mt-4">
          <a href="#skills" className="btn btn-primary btn-lg me-2">Lihat Skill</a>
          <a href="#contact" className="btn btn-outline-dark btn-lg">Hubungi Saya</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;