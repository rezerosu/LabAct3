// src/pages/AboutPage.jsx
import Button from '../components/Button';

function AboutPage() {
  return (
    <div className="page-content">
      <h1 className="section-title">About Me</h1>
      
      <div className="about-grid">
        <div>
          <img 
            src="https://placehold.co/400x400" 
            alt="Developer profile" 
            className="featured-image"
          />
        </div>
        <div>
          <h2>Who I Am</h2>
          <p>
            I'm a passionate front-end developer with expertise in React.js and modern JavaScript.
            I love creating intuitive, accessible, and visually appealing web applications that
            solve real-world problems.
          </p>
          <p>
            With a background in design and coding, I bridge the gap between aesthetics and functionality.
            My approach to development focuses on writing clean, maintainable code and creating
            reusable components.
          </p>
          <h2>My Skillset</h2>
          <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
            <li>React.js & React Router</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Responsive Design</li>
            <li>CSS-in-JS Libraries</li>
            <li>Version Control (Git)</li>
            <li>UI/UX Principles</li>
          </ul>
        </div>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <h2>My Journey</h2>
        <p>
          My passion for web development started when I built my first HTML website. Since then,
          I've been continuously learning and improving my skills through personal projects,
          online courses, and collaborating with other developers.
        </p>
        <p>
          I believe in the power of component-based architecture and the importance of creating
          reusable, well-tested code. This approach not only makes development more efficient
          but also results in more maintainable and scalable applications.
        </p>
        
        <div style={{ marginTop: '20px' }}>
          <Button to="/articles">Read My Articles</Button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

