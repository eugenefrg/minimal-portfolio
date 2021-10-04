import './App.scss';
import data from './assets/data';
import {ReactComponent as Twitter} from "./assets/images/icons/twitter.svg"
import {ReactComponent as LinkedIn} from "./assets/images/icons/linkedIn.svg"
import {ReactComponent as GitHub} from "./assets/images/icons/github.svg"
import {ReactComponent as AtSign} from "./assets/images/icons/at-sign.svg"
import {ReactComponent as CatFull} from "./assets/images/siteDesign/catFull.svg"
import {ReactComponent as CatWire} from "./assets/images/siteDesign/catWire.svg"
function App() {
  return (
    <div className="main">
      <div className="sider">
        <div className="description">
          <div>
            <CatFull/>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <p className="font-bold">Follow me on:</p>
            <div className="link-icons">
              <a href={data.links.linkedin} target="_blank" rel="noreferrer"><LinkedIn/></a>
              <a href={data.links.twitter} target="_blank" rel="noreferrer"><Twitter/></a>
              <a href={data.links.github} target="_blank" rel="noreferrer"><GitHub/></a>
              <a href={data.links.gmail} target="_blank" rel="noreferrer"><AtSign/></a>
            </div>
          </div>
        </div>  
      </div>
      <div className="filler"/>
      <div className="projects">
        <div className="catHolder">
          <CatWire/>
        </div>
        <div className="listBox">
          <h2>My Projects</h2>
          {data.projects.map(project=>{
            return (<div className="projectItem">
                <h3><a href={project.demoUrl} target="_blank" rel="noreferrer">{project.name}</a></h3>
                <img src={project.imageUrl} alt={project.name}/>
                <p>{project.description}</p>
                {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">View Code</a>}
              </div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
