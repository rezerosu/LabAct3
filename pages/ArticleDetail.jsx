// src/pages/ArticlePage.jsx
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';

function ArticlePage() {
  const { id } = useParams();
  
  // Sample article data - in a real app, you would fetch this based on the ID
  const articles = {
    "1": {
      title: "Getting Started with React",
      image: "https://placehold.co/800x400?text=React+Basics",
      content: `
        <h2>Introduction to React</h2>
        <p>React is a JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer in web and mobile apps. React allows us to create reusable UI components.</p>
        
        <h2>Setting Up Your First React App with Vite</h2>
        <p>Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. Here's how to get started:</p>
        
        <ol>
          <li>Run <code>npm create vite@latest my-react-app</code></li>
          <li>Select React as the framework</li>
          <li>Choose JavaScript or TypeScript</li>
          <li>Navigate to the project directory and install dependencies with <code>npm install</code></li>
          <li>Start the development server with <code>npm run dev</code></li>
        </ol>
        
        <h2>Creating Your First Component</h2>
        <p>Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces. Here's a simple example:</p>
        
        <pre><code>
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
        </code></pre>
      `
    },
    "2": {
      title: "Component-Based Architecture",
      image: "https://placehold.co/800x400?text=Components",
      content: `
        <h2>Understanding Component-Based Architecture</h2>
        <p>Component-based architecture is a design approach where the system is broken down into reusable, self-contained components. Each component has its own functionality and can be developed, tested, and maintained independently.</p>
        
        <h2>Benefits of Component-Based Architecture</h2>
        <ul>
          <li><strong>Reusability:</strong> Components can be reused across different parts of an application or even across different projects.</li>
          <li><strong>Maintainability:</strong> Each component has a single responsibility, making it easier to understand and maintain.</li>
          <li><strong>Scalability:</strong> New features can be added by creating new components without affecting existing functionality.</li>
          <li><strong>Testability:</strong> Components can be tested in isolation, making testing more straightforward.</li>
        </ul>
        
        <h2>Best Practices for Component Design</h2>
        <p>When designing components, consider the following principles:</p>
        <ol>
          <li>Keep components focused on a single responsibility</li>
          <li>Minimize component dependencies</li>
          <li>Design for reusability</li>
          <li>Use clear and consistent naming conventions</li>
          <li>Document component interfaces and behaviors</li>
        </ol>
      `
    },
    "3": {
      title: "Responsive Design Principles",
      image: "https://placehold.co/800x400?text=Responsive+Design",
      content: `
        <h2>What is Responsive Design?</h2>
        <p>Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It's about creating websites that provide an optimal viewing experience across different devices.</p>
        
        <h2>Core Principles of Responsive Design</h2>
        <ul>
          <li><strong>Fluid Grids:</strong> Using relative units like percentages instead of fixed units like pixels for layout elements.</li>
          <li><strong>Flexible Images:</strong> Images that resize within their containing elements.</li>
          <li><strong>Media Queries:</strong> CSS rules that apply different styles based on device characteristics.</li>
        </ul>
        
        <h2>Mobile-First Approach</h2>
        <p>The mobile-first approach means designing for mobile devices first, then progressively enhancing the design for larger screens. This approach ensures that the core content and functionality are optimized for mobile users, who often have more constraints in terms of screen size and bandwidth.</p>
        
        <h2>Responsive Typography</h2>
        <p>Typography is a crucial aspect of responsive design. Techniques like fluid typography (using viewport units) help create text that scales smoothly across different screen sizes, maintaining readability and visual harmony.</p>
      `
    }
  };
  
  const article = articles[id];
  
  if (!article) {
    return (
      <div className="page-content">
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/articles">
          <Button>Back to Articles</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="page-content">
      <h1 className="section-title">{article.title}</h1>
      <img src={article.image} alt={article.title} className="featured-image" />
      
      <div 
        className="article-full-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      
      <div style={{ marginTop: '30px' }}>
        <Link to="/articles">
          <Button>Back to Articles</Button>
        </Link>
      </div>
    </div>
  );
}

export default ArticlePage;