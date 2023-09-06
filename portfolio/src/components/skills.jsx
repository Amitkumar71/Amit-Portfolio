import React from 'react';
import './skills.css';
import {FaGithub,FaFigma,FaPython,FaReact} from "react-icons/fa"
import {SiCanva,SiMysql,SiHtml5,SiBootstrap,SiSass} from "react-icons/si"
import {DiGit} from "react-icons/di";
import {TbBrandDjango} from "react-icons/tb";
import {BiLogoFlask,BiLogoJavascript,BiLogoCss3} from "react-icons/bi";
import { IconContext } from "react-icons";

const Skills = () => {
  return (
    <IconContext.Provider value={{size:"1.5rem"}}>
    <div className="skills-container">
      <h1 className="skills-heading">MY SKILLS INCLUDE</h1>
      <div className="sections">
        <div className="section">
          <h2>Frontend</h2>
          <ul>
            <li><SiHtml5 className='icon'/>   HTML</li>
            <li><BiLogoCss3 className='icon'/>   CSS</li>
            <li><FaReact className='icon' />   React.js</li>
            <li><BiLogoJavascript className='icon' />   JavaScript</li>
            <li><SiBootstrap className='icon'/>   Bootstrap</li>
            <li><SiSass className='icon'/>   SASS</li>
          </ul>
        </div>
        <div className="section-2">
          <h2>Backend</h2>
          <ul>
            <li><FaPython className='icon'/>   Python</li>
            <li><TbBrandDjango className='icon'/>   Django</li>
            <li><BiLogoFlask className='icon'/>   Flask</li>
            <li><SiMysql className='icon'/>   MySQL</li>
          </ul>
        </div>
        <div className="section-3">
          <h2>Tools</h2>
          <ul>
          <li><DiGit className='icon'/>   Git</li>
          <li><FaGithub className='icon'/>   Github</li>
            <li><SiCanva className='icon'/>   Canva</li>
            <li><FaFigma className='icon'/>   Figma</li>
          </ul>
        </div>
      </div>
    </div>
    </IconContext.Provider>
  );
}

export default Skills;
