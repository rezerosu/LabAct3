// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="articles" element={<ArticleList />} />
          <Route path="articles/:id" element={<ArticlePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;