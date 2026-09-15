import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
// import About from './About';
// import Contact from './Contact';
import './index.css';
// import Projects from './projects';
// import Experience from './Experience';
function Navigation() {
    return ( 
        <>
      <div className="row">
      <BrowserRouter>
      {/* Navigation */}
  <nav className="navbar sticky navbar-expand-lg bg-body-tertiary d-flex  ">
  <div className="container-fluid ">
        <a style={{textDecoration:"none"}} className="navbar-brand" href="/">Hillary PortFolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
  <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects"> Projects[10+]</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experience">Experience[6 years]</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./Hillary_Nthome_IT_Officer_Resume.pdf" download="Hillary_portfolio.pdf">My Resume</a>
        </li>
        <li style={{boderRadius:"20px"}} className="nav-item bg-dark ">
          <a  className="nav-link text-white" href="/getintouch">Get In Touch</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* end of navbar */}
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </BrowserRouter>
        </div>
     
        </>
     );
}

export default Navigation;