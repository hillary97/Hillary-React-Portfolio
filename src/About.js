import React from 'react';
function About() {
function bio(){
    const bio=`<p>I’m a versatile IT professional with hands-on experience across IT operations, software development, system administration, network support, technical troubleshooting, and graphic design.

    My work sits at the intersection of technology, problem-solving, and digital innovation. I help organizations keep their IT environments reliable while developing practical software solutions that improve processes, productivity, and user experience.

    As a software developer, I build web applications and digital solutions using technologies such as PHP, Laravel, JavaScript, React, Vue.js, Node.js, Python, MySQL, REST APIs, and Git.

    On the IT operations side, I work with computer systems, networks, servers, operating systems, Microsoft 365, hosting environments, hardware, software, and end-user support.

    I also have a strong creative side, using Photoshop, Illustrator, Canva, CorelDRAW, and Figma to create professional visual and digital experiences.

    I’m driven by one goal: use technology to solve real problems and create solutions that work. </p>`;
    document.getElementById("detail").innerHTML="<h6>All About Me,</h6>";
    document.getElementById("description").innerHTML=bio;
}
function tech(){
    const stack =`<div><h6>Development</h6> <p>PHP • Laravel • JavaScript • React • Vue.js • Node.js • Python • TypeScript
    Database: MySQL • SQL</p>
    <h6>IT & Infrastructure</h6> <p>Windows • Linux • Microsoft 365 • Networking • VMware • cPanel/WHM</p>
    <h6>Tools</h6> <p>Git • GitHub • VS Code • Figma • Git Bash </p>
    <h6>Creative</h6> <p>Photoshop • Illustrator • Canva • CorelDRAW</p></div>`;
    document.getElementById("detail").innerHTML="<h6>Tech Stack</h6>";
    document.getElementById("description").innerHTML=stack;
}

function serve(){
    const element=`
        <div><h6>IT Operations & Support:</h6><p className="fontSize:'10px'"> Hardware and software troubleshooting, network configuration and troubleshooting,
    user support, system maintenance, printer/peripheral support, Microsoft 365 support, and IT asset management.</p><br>
    <h6>System Administration</h6><p>Windows and Linux environments, servers and storage, user/access management,
system monitoring, backups, hosting/cPanel/WHM, and IT security</p>.
<br><h6>Software Development</h6><p>Web applications, business systems, REST APIs, database development, front-end and
backend development, and system integrations</p>
    </div>`
    ;
    document.getElementById("detail").innerHTML="<h6>What I Do</h6>";
    document.getElementById("description").innerHTML=element;

}
     
    return ( 
        <div className="about-me">
            <p className='text-muted fw-bold'>Home→About Me</p>
            <p className="know display-1 text-center mt-4"><span >About</span> HILLARY NTHOME</p>
            <div className="row container mx-auto mt-3">
                <div className="col-sm-6">
                   <>
                   <br /><br /><br /><br />
                   <p className="text-muted">Want  to Know more About Me? Use the Links Below</p>
                 <p className="poppins-semibold h5 fst-italic p-2">For More Information ↓↓↓</p>
                 <button style={{color:"white",backgroundColor:"black",border:"none",fontWeight:"bold",padding:"15px",borderRadius:"20px"}} onClick={bio} >Check BIO →</button><br /><br />
                   <button style={{color:"white",backgroundColor:"black",border:"none",fontWeight:"bold",borderRadius:"20px",padding:"15px"}} onClick={serve} >What I Offer →</button><br /><br />
                   <button style={{color:"white",borderRadius:"20px",backgroundColor:"black",padding:"10px",fontWeight:"bold"}} onClick={tech} >My Tech Stack →</button><br />
                   
                   
                   </>
                </div>
                <div style={{border:"2px solid gray",borderRadius:"15px"}} className="col-sm-6 mt-5 bg-dark">
                <div id="detailed" className="detail p-3 ">
                    <h5 className='text-white' id="detail">All About Me</h5>
                    <p id="description" className="p-2 inter-regular text-secondary fs-6">I’m a versatile IT professional with hands-on experience across IT operations, software development, system administration, network support, technical troubleshooting, and graphic design.

                                My work sits at the intersection of technology, problem-solving, and digital innovation. I help organizations keep their IT environments reliable while developing practical software solutions that improve processes, productivity, and user experience.

                                As a software developer, I build web applications and digital solutions using technologies such as PHP, Laravel, JavaScript, React, Vue.js, Node.js, Python, MySQL, REST APIs, and Git.

                                On the IT operations side, I work with computer systems, networks, servers, operating systems, Microsoft 365, hosting environments, hardware, software, and end-user support.

                                I also have a strong creative side, using Photoshop, Illustrator, Canva, CorelDRAW, and Figma to create professional visual and digital experiences.

                                I’m driven by one goal: use technology to solve real problems and create solutions that work.</p>
                </div>
                </div>

            </div>
        </div>
     );
}

export default About;