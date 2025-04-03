// src/pages/HomePage.jsx
import Button from '../components/Button';

function HomePage() {
  return (
    <div>
      <div className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm a front-end developer passionate about creating beautiful and user-friendly web experiences.
          This portfolio showcases my skills, projects, and articles about web development.
        </p>
        <Button to="/about">Learn More About Me</Button>
      </div>
      
      <div className="page-content">
        <h2 className="section-title">Featured Projects</h2>
        <img 
          src="https://placehold.co/600x400" 
          alt="Project screenshot" 
          className="featured-image"
        />
        <p>
          I specialize in React development, creating responsive and interactive user interfaces.
          My approach focuses on clean code, component reusability, and modern design principles.
        </p>
        <p>
          Throughout my journey as a developer, I've worked on various projects ranging from
          simple landing pages to complex web applications. I'm continuously learning and
          expanding my skillset to stay updated with the latest web technologies.
        </p>
        <div style={{ marginTop: '20px' }}>
          <Button to="/articles">Check Out My Articles</Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;