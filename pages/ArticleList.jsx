// src/pages/ArticleList.jsx
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function ArticleList() {
  // Sample article data
  const articles = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the fundamentals of React and how to set up your first application using Vite.",
      image: "https://placehold.co/600x400?text=React+Basics"
    },
    {
      id: 2,
      title: "Component-Based Architecture",
      excerpt: "Explore the benefits of component-based architecture and how to structure your React applications.",
      image: "https://placehold.co/600x400?text=Components"
    },
    {
      id: 3,
      title: "Responsive Design Principles",
      excerpt: "Master the art of creating websites that work beautifully across all devices and screen sizes.",
      image: "https://placehold.co/600x400?text=Responsive+Design"
    }
  ];

  return (
    <div className="page-content">
      <h1 className="section-title">Articles</h1>
      <p>
        Here are some articles I've written about front-end development, React, and web design.
        Feel free to browse through them and learn something new!
      </p>
      
      <div className="article-grid">
        {articles.map(article => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.title} />
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <Link to={`/articles/${article.id}`}>
                <Button>Read More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;