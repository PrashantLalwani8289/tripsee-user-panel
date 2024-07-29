import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RoutesConfig from './routes/RoutesConfig'
// import About from './pages/about/About'
// import Blogs from './pages/blogs/Blogs'
// import {home} from './pages/home'
// import Home from './pages/home/home' // Import the Home component
function App() {

  return (
    <BrowserRouter>
      <RoutesConfig isAuthenticated={true} />
    </BrowserRouter>
  )
}

export default App
