// 여기서 메인홈페이지 건들기
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import projects from '../data/projects';
import Header from './Header';
import CircularProgressBarComponent from './CircularProgressBar';
import ApexChart from './ApexChart';
import Categories from './Categories';
import './Home.css';
import { ReactTyped as Typed } from 'react-typed';

const Home = () => {
  return (
    <>
      <Header />
      <Fade>
      <div className="profile-section">
        <img src={`${process.env.PUBLIC_URL}/image.png`} className="My-photo" alt="My photo" />
      </div>
      </Fade>
      <Fade>
        <Typed
          className="intro-text"
          strings={['안녕하세요! 고객의 입장에서 불편함을 찾는 SW기술자, ooo입니다']}
          typeSpeed={40}
          backSpeed={50}
          loop={false}
          showCursor={false}
        />
      </Fade>
      <Fade>
        <Categories />
      </Fade>
      <ApexChart />
      <div className="skills">
        <div className="skill-category">
          <h2>Hard Skill</h2>
          <div className="circular-progress-bar">
            <CircularProgressBarComponent
              colorCircle="#ededed"
              colorSlice="#f0e10e"
              percent={52}
              fontColor="#b3a92b"
              round={true}
              fontSize="15px"
              textPosition="1.5rem"
            >
              <div className="langHTML">Data Analysis (ML)</div>
            </CircularProgressBarComponent>
            <CircularProgressBarComponent
              colorCircle="#ededed"
              colorSlice="#13bd2a"
              percent={31}
              fontColor="#13bd2a"
              round={true}
              fontSize="15px"
              textPosition="1.5rem"
            >
              <div className="langHTML">MySQL</div>
            </CircularProgressBarComponent>
            <CircularProgressBarComponent
              colorCircle="#ededed"
              colorSlice="#de251f"
              percent={48}
              fontColor="#de251f"
              round={true}
              fontSize="15px"
              textPosition="1.5rem"
            >
              <div className="langHTML">C++</div>
            </CircularProgressBarComponent>
            <CircularProgressBarComponent
              colorCircle="#ededed"
              colorSlice="#e54e21"
              percent={32}
              fontColor="#e54e21"
              round={true}
              fontSize="15px"
              textPosition="1.5rem"
            >
              <div className="langHTML">React</div>
            </CircularProgressBarComponent>
            <CircularProgressBarComponent
              colorCircle="#ededed"
              colorSlice="#3572A5"
              percent={70}
              fontColor="#3572A5"
              round={true}
              fontSize="15px"
              textPosition="1.5rem"
            >
              <div className="langHTML">Python</div>
            </CircularProgressBarComponent>
            <CircularProgressBarComponent
              colorCircle="#ededed"
              colorSlice="#b07219"
              percent={34}
              fontColor="#b07219"
              round={true}
              fontSize="15px"
              textPosition="1.5rem"
            >
              <div className="langHTML">HTML/CSS/JS</div>
            </CircularProgressBarComponent>
          </div>
        </div>
        <div className="skill-category">
          <h2>Soft Skill</h2>
          <div className="circular-progress-bar">
            <CircularProgressBarComponent
              colorCircle="#ededed"
              colorSlice="#00aaff"
              percent={65}
              fontColor="#00aaff"
              round={true}
              fontSize="15px"
              textPosition="1.5rem"
            >
              <div className="langHTML">MS Office</div>
            </CircularProgressBarComponent>
            <CircularProgressBarComponent
              colorCircle="#ededed"
              colorSlice="#ffdd44"
              percent={77}
              fontColor="#ffdd44"
              round={true}
              fontSize="15px"
              textPosition="1.5rem"
            >
              <div className="langHTML">Teamwork</div>
            </CircularProgressBarComponent>
            <CircularProgressBarComponent
              colorCircle="#ededed"
              colorSlice="#d97918"
              percent={60}
              fontColor="#d97918"
              round={true}
              fontSize="15px"
              textPosition="1.5rem"
            >
              <div className="langHTML">Team Collabo Tool</div>
            </CircularProgressBarComponent>
            <CircularProgressBarComponent
              colorCircle="#ededed"
              colorSlice="#d918af"
              percent={80}
              fontColor="#d918af"
              round={true}
              fontSize="15px"
              textPosition="1.5rem"
            >
              <div className="langHTML">Communication</div>
            </CircularProgressBarComponent>
            <CircularProgressBarComponent
              colorCircle="#ededed"
              colorSlice="#1f9ede"
              percent={75}
              fontColor="#1f9ede"
              round={true}
              fontSize="15px"
              textPosition="1.5rem"
            >
              <div className="langHTML">Learning Spirit</div>
            </CircularProgressBarComponent>
            <CircularProgressBarComponent
              colorCircle="#ededed"
              colorSlice="#28a745"
              percent={75}
              fontColor="#28a745"
              round={true}
              fontSize="15px"
              textPosition="1.5rem"
            >
              <div className="langHTML">Challenge Mind</div>
            </CircularProgressBarComponent>
          </div>
        </div>
      </div>
      
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-title">{project.title}</div>
            <div className="project-content">
              <p><span className="bullet">●</span> Goal</p>
              <p className="description">- {project.purpose}</p>
              <p><span className="bullet">●</span> Tech Stack</p>
              <div className="tech-stack">
                {project.techStackImgs && project.techStackImgs.length > 0 ? (
                  project.techStackImgs.map((img, idx) => (
                    <img key={idx} src={img} alt={project.techStack[idx]} />
                  ))
                ) : (
                  <p>No tech stack images available</p>
                )}
              </div>
              <p><span className="bullet">●</span> Position in Team</p>
              <p className="description">- {project.teamRole}</p>
              <p><span className="bullet">●</span> My Role & Contribution</p>
              <p className="description">- {project.myRole}</p>
              <div className="progress-bar-container">
                <ProgressBar percentage={project.contribution} />
              </div>
              <Link to={`/project-details/${project.id}`} className="readme" title={project.detail}>ReadMe</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
