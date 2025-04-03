import { useParams, Link } from "react-router-dom";

function ArticlePage() {
  const { id } = useParams();
  
  // Simulate article data (in a real app, you would fetch this from an API)
  const articles = {
    1: {
      title: "Getting Started with React",
      content: `
        <p>React is a popular JavaScript library for building user interfaces. Created by Facebook, it allows developers to create reusable UI components that update efficiently when data changes.</p>
        
        <h2>Key Concepts</h2>
        <p>To get started with React, you need to understand a few key concepts:</p>
        <ul>
          <li>Components: The building blocks of React applications</li>
          <li>Props: How data is passed between components</li>
          <li>State: How components maintain and update their data</li>
          <li>JSX: The syntax extension used to write React elements</li>
        </ul>
        
        <h2>Creating Your First Component</h2>
        <p>Let's create a simple component:</p>
        <pre>
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
        </pre>
      `,
      image: "https://placehold.co/800x400",
      date: "April 1, 2025"
    },
    2: {
      title: "Understanding React Hooks",
      content: `
        <p>React Hooks allow you to use state and other React features without writing a class. They were introduced in React 16.8 and have changed how we write React applications.</p>
        
        <h2>Common Hooks</h2>
        <p>Here are some of the most commonly used hooks:</p>
        <ul>
          <li>useState: For managing state in functional components</li>
          <li>useEffect: For handling side effects like data fetching</li>
          <li>useContext: For consuming context in functional components</li>
          <li>useReducer: For more complex state logic</li>
        </ul>
        
        <h2>Using useState</h2>
        <p>Here's a simple counter example using useState:</p>
        <pre>
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
        </pre>
      `,
      image: "https://placehold.co/800x400",
      date: "March 25, 2025"
    },
    3: {
      title: "Building Responsive UIs",
      content: `
        <p>Creating responsive user interfaces is essential for modern web applications. Here are some tips to make your React UIs work well on all devices.</p>
        
        <h2>Use Flexbox and Grid</h2>
        <p>CSS Flexbox and Grid layouts provide powerful ways to create responsive designs:</p>
        <ul>
          <li>Flexbox is great for one-dimensional layouts (rows or columns)</li>
          <li>Grid is perfect for two-dimensional layouts (rows and columns)</li>
        </ul>
        
        <h2>Media Queries</h2>
        <p>Always use media queries to adjust your layout based on screen size:</p>
        <pre>
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
        </pre>
        
        <h2>Responsive Images</h2>
        <p>Make sure your images resize properly with:</p>
        <pre>
img {
  max-width: 100%;
  height: auto;
}
        </pre>
      `,
      image: "https://placehold.co/800x400",
      date: "March 15, 2025"
    }
  };
  
  const article = articles[id];
  
  if (!article) {
    return <div>Article not found</div>;
  }
  
  return (
    <div className="article-page">
      <Link to="/articles" className="back-link">← Back to Articles</Link>
      
      <div className="article-header">
        <h1>{article.title}</h1>
        <p className="article-date">{article.date}</p>
        <img src={article.image} alt={article.title} className="article-hero-image" />
      </div>
      
      <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}

export default ArticlePage;