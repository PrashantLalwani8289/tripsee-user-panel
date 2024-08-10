
import BlogEditor from '../../components/BlogEditor';
import Header from '../../components/header'
import Footer from '../../components/footer'
import OffCanvasMenu from '../../components/OffCanvasMenu';
import OffCanvasMobileMenu from '../../components/OffCanvasMobileMenu';
import DarkThemeButton from '../../components/dark-theme-button';

const App = () => {
  return (
    <div className="page">
      <Header/>
      <OffCanvasMenu/>
      <OffCanvasMobileMenu/>
      <DarkThemeButton/>
      
      <header className="App-header d-flex justify-content-center" style={{marginTop:"100px"}}>
        <h1 className='mb-60'>Create your own blog</h1>
      </header>
      <main className="App-header">
        <BlogEditor />
      </main>
      <Footer/>
    </div>
  );
};

export default App;
