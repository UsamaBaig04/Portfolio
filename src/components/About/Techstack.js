import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiSass,  
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTailwindcss,
  SiWebpack,
  SiRedux,
  SiBabel,
  SiTypescript,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h5>HTML</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
        <h5>CSS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>JavaScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap/>
        <h5>BootStrap</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss/>
        <h5>Tailwind CSS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass/>
        <h5>SASS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack />
        <h5>Webpack</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h5>Redux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBabel/>
        <h5>Babel</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript/>
        <h5>TypeScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit/>
        <h5>Github</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h5>Firebase</h5>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h5>Python</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
