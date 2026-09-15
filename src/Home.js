import hillary2 from "./images/hillary2.png";
import combined from "./images/combined.png";
import hillaryport from "./images/hillaryport.JPG";
import mbugua from "./images/mbugua.JPG";
import what from "./images/what.jpg";
import Experience from "./Experience";
import About from "./About";
import Contact from "./Contact";
function Home() {
    return ( 
        <div className="text-center mx-auto">
            <p id="name" className="text-center name"><span className="hillary ">HILLARY</span> <span className="fw-bolder">NTHOME</span></p>
           
{/* hero secrtion start */}
            <div className="row container mx-auto">
                <div className="col-lg-4">
                    <div className="my-details text-sm-start w-100">
                        <br /><br /><br /> <br /><br />
                        <h2 className="roboto-medium ">IT Systems & Software Professional</h2>
                        <p className="fs-6 poppins-medium">IT Officer • Software Developer • Systems Administrator • Technical Support Specialist • Graphic Designer</p>
                        <p style={{fontSize:"13px"}} className="inter-regular text-secondary text-capitalize"> 
                        I build, manage, troubleshoot, and improve digital systems that help organizations work smarter, stay connected, and operate efficiently.</p>
                    
                        <p ><a className="cto w-75 p-3 fw-bold text-white bg-dark" style={{textDecoration:"none"}} href="https://api.whatsapp.com/send?phone=+254 797 259 596"><img style={{borderRadius:"40px",width:"30px" ,height:"30px"}} src={what}  alt="whatsapp pic"/> {" "}Get In Touch</a></p>
                        
                        
                    </div>

                </div>
                <div className="col-lg-3">
                    <div className="my-image">
                        <img className="img-fluid" style={{width:"100%",mx:"auto",display:"block"}} src={hillary2} alt="Hillary" />
                    </div>
                </div>
                <div className="col-lg-3">
                    <br /><br /> <br /><br /><br />
                    <div className="text-dark inter-medium">
                    <a style={{}} href="https://github.com/hillary97">
                    <img className=" p-2" src="https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github&logoColor=white" alt="Github Badge"/>
				    </a><br /> 
                    <a  href="https://www.linkedin.com/in/hillary-nthome-357211218">
                    <img className="p-2" src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
                    </a><br></br>
                    <a href="https://api.whatsapp.com/send?phone=+254 797 259 596"><img style={{borderRadius:"40px",width:"50px" ,height:"50px"}} src={what}  alt="whatsapp pic"/></a>
                    </div>
                    
                </div>
            </div>
{/* end of the hero section */}

{/* about section start */}
<div id="about" className="mt-5 pt-5">
    <About />

</div>
{/* end of about section */}

{/* Start of projects  section */}
<div id="projects" className="projects-done bg-dark text-white">
    <br /><br /><br />
    <p className="text-center fst-italic">-Selected Work-</p>
    <h2 className="fs-1 m-3">Design That <br /> Drives Results</h2>
    <p className="text-secondary p-4" style={{fontSize:"15px"}}>Real projects build for clients</p>
    <div style={{boder:"2px solid black"}} className="row ">
        <div className="col-sm-12 bg-dark">
        <img className="img-fluid mx-auto d-block border-" src={combined} alt="graphics 1" />
        <p className="m-2  text-secondary p-4">Sample projects Done</p>
        <p className="text-center display-6 p-3">Featured Projects</p>
        {/* <div className="col-sm-3 mx-auto">
            
        <img style={{width:"300px",height:"500px"}} className="img-fluid mx-auto border-rounded h-25" src={hillaryport} alt="hillary-portfolio-site"/><br />
        </div>
        <div className="cl-sm-3">
        <img style={{width:"300px",height:"300px"}} className="img-fluid mx-auto d-block h-25" src={mbugua} alt="mbugua-portfolio-site" />
        </div> */}
        </div>
        </div>
        <div className="row container mx-auto">
            <div className="col-sm-">
      
        <img className="img-fluid mx-auto d-block" src={hillaryport} alt="hillary-portfolio-site"/><br />
        <h5 className="text-start">Hillary First Portfolio</h5>
        <p className="text-secondary text-start">Portfolio Project&nbsp;<a class="bg-primary text-dark  " style={{textDdecoration:"none"}} href="https://hillarynthomev1.netlify.app/"><p className="roboto-regular ps-4  pt-2 pb-2 pe-2 text-info" style={{borderRadius:" 10px"}}><i style={{fontSize:"30px"}} className="uil uil-external-link-alt"></i> Live Demo</p></a></p>
        </div>
        <div className="col-sm- m-3">
        <img  className="img-fluid mx-auto d-block " src={mbugua} alt="mbugua-portfolio-site" />
        <h5 className="p-2 text-start">Erick Mbugua Site</h5>
        <p className="text-secondary text-start">Portfolio Project&nbsp;<a class="bg-primary text-dark  " style={{textDdecoration:"none"}} href="https://mbugua-portfolio.netlify.app/"><p className="roboto-regular ps-4  pt-2 pb-2 pe-2 text-info" style={{borderRadius:" 10px"}}><i style={{fontSize:"30px"}} className="uil uil-external-link-alt"></i> Live Demo</p></a></p>
        </div>
        </div>
    

</div>

{/* end of projects section */}


{/* Start of Experience Section */}
<br /><br /><br /><br /><br />
<div id="experience" className="experience mt-5">
    <p className="text-muted p-2">Personal Journey</p>
    <p className="display-4 mb-5">Career Journey and Work Experience</p>
    {/* importing the experience component */}
    <Experience />
</div>

{/* Start of Contact Section */}
<br /><br /><br /><br /><br />
<div id="contact" className="contact mt-5">
    <p className="text-muted p-2 fw-bold">Talk to Me</p>
    <h3 className=" mb-5">Contact Me</h3>
    {/* importing the experience component */}
    <Contact />
</div>



        </div>
        
        
     );
}

export default Home;