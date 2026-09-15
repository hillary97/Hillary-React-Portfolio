import what from "./images/what.jpg";
function Contact() {
    return ( 
        <div >
            <h1 className="p-2 m-2 display-1 "> Have a Project or Opportunity?</h1>
            <p className="text-muted">Whether you need technical support, a software solution, system administration, or a professional digital
                experience, I’d love to hear from you.</p>
                <footer className="p-2 m-5">
                    <div className="contact-section row">
                        <div className="col-lg-4">
                            <h5>Hillary Nthome</h5>
                            <p className="fs-6 poppins-medium">IT Officer • Software Developer • Systems Administrator • Technical Support Specialist • Graphic Designer</p>
                        </div>
                        <div className="col-lg-4">
                            <h5>Contact Details</h5>
                            <p style={{marginLeft:"25px"}}><span className="inter-semibold"><i class="uil uil-location-point"></i>:</span> Mlolongo, Along Mombasa Road,</p>
		<p style={{marginLeft:"25px"}}><span className="inter-semibold"><i class="uil uil-phone"></i>:</span> 0797259596</p>
		<p style={{marginLeft:"25px"}}><span className="inter-semibold"><i class="uil uil-envelope-check"></i>:</span> hillarynthome97@gmail.com</p>
                        </div>
                        {/* <div className="col-lg-3">
                            <h5>UseFULL Links</h5>
                            <a style={{textDecoration:"none",fontSize:"px",padding:"10px",color:"white",marginLeft:"20px"}} href="#home"><i class="uil uil-estate"></i>Home</a><br></br>

                        </div> */}
                        <div className="col-lg-4">
                           <h5>Important Links</h5>
                           <a href="mailto:hillarynthome97@gmail.com">
                        <img className="p-2" src="https://img.shields.io/badge/Gmail-red?style=for-the-badge&logo=Gmail&logoColor=white" alt="Gmail Badge"/>
                        </a>
                        <br />
                        <a  href="https://github.com/hillary97">
                    <img className="p-2" src="https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github&logoColor=white" alt="Github Badge"/>
                                </a><br />
                    <a  href="https://www.linkedin.com/in/hillary-nthome-357211218">
                    <img className="p-2" src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
                    </a><br />
                    <a  href="https://api.whatsapp.com/send?phone=+254 797 259 596"><img style={{borderRadius:"40px", width:"50px", height:"50px"}} alt="whatsapp picha" src={what} /></a>
                    
                       </div>
                       </div>
                    <p className="fw-semibold bg-dark text-white p-2 m-2" >Designed & Created By Hillary Nthome © 2026 All Rights Reserved <i class="uil uil-arrow-up"></i></p>
                     </footer>
        </div>
     );
}

export default Contact;