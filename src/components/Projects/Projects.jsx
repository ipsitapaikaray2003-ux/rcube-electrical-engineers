import "./Projects.css";

import project1 from "../../assets/project1.jpeg";
import project2 from "../../assets/project2.jpeg";
import project3 from "../../assets/project3.jpeg";
import project4 from "../../assets/project4.jpeg";
import project5 from "../../assets/project5.jpeg";
import project6 from "../../assets/project6.jpeg";
import project7 from "../../assets/project7.jpeg";
import project8 from "../../assets/project8.jpeg";

function Projects() {
  return (
    <section className="projects">

      <div className="container">

        <div className="project-heading">

          <span>OUR PROJECTS</span>

          <h2>
            Delivering Excellence
            <br />
            Across Industries
          </h2>

          <p>
            A showcase of our completed electrical engineering projects
            across commercial, industrial and infrastructure sectors.
          </p>

        </div>

        {/* Bento Grid */}

        <div className="bento-grid">

          {/* Project 1 */}
          <div className="item item1">
            <img src={project1} alt="" />
          </div>

          {/* Project 2 */}
          <div className="item item2">
            <img src={project2} alt="" />
          </div>

          {/* Project 3 */}
          <div className="item item3">
            <img src={project3} alt="" />
          </div>

          {/* Project 4 */}
          <div className="item item4">
            <img src={project4} alt="" />
          </div>

          {/* Project 5 */}
          <div className="item item5">
            <img src={project5} alt="" />
          </div>

          {/* Project 6 */}
          <div className="item item6">
            <img src={project6} alt="" />
          </div>

          {/* Project 7 */}
          <div className="item item7">
            <img src={project7} alt="" />
          </div>

          {/* Project 8 */}
          <div className="item item8">
            <img src={project8} alt="" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;