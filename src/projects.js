import combined from "./images/combined.png";
function Projects() {
    return ( 
        <div id="projects" className="projects-done bg-dark text-white">
    <br /><br /><br />
    <p className="text-center fst-italic">-Selected Work-</p>
    <h2>Design That <br /> Drives Results</h2>
    <p className="text-secondary pb-5" style={{fontSize:"15px"}}>Real projects build for clients</p>
    <div style={{boder:"2px solid blue"}} className="row ">
        <div className="col-sm-12 bg-dark">
        <img className="img-fluid mx-auto d-block" src={combined} alt="graphics 1" />
        </div>
    </div>

</div>
     );
}

export default Projects;