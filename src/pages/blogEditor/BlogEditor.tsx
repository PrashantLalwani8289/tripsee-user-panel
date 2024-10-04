
import BlogEditor from '../../components/BlogEditor';
import Header from '../../components/header'
import Footer from '../../components/footer'
import OffCanvasMenu from '../../components/OffCanvasMenu';
import OffCanvasMobileMenu from '../../components/OffCanvasMobileMenu';
import DarkThemeButton from '../../components/dark-theme-button';
import { useEffect } from 'react';

const App = () => {
  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enable smooth scrolling
    }); // Scroll to the top (0,0) when the component mounts
    }, []);

    return null; // No need to render anything
  };
  ScrollToTop()
  return (
    <div className="page">
      <Header />
      <OffCanvasMenu />
      <OffCanvasMobileMenu />
      <DarkThemeButton />

      <header className="App-header d-flex justify-content-center" style={{ marginTop: "100px" }}>
        <h1 className='mb-60'>Create your own blog</h1>
      </header>
      <main className="App-header">
        <BlogEditor />
      </main>
      <Footer />
    </div>
  );
};

export default App;
