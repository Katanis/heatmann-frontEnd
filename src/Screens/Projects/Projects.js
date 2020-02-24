import React from 'react';
import axios from 'axios';
import BurgerMenu from '../../Components/NavigationMenu/BurgerMenu';

import ProjectCard from '../../Components/ProjectCard/ProjectCard';

class Projects extends React.Component {
  state = {
    projects: [],
    path: 'http://18.189.49.66:3000',
    hideNav: null
  };

  componentDidMount() {
    axios.get(this.state.path + '/api/projects').then(res => {
      const projects = res.data;
      this.setState({ projects: projects.project });
      console.log('debuging Project Info: ' + projects.project.description);
      console.log(JSON.stringify(projects.project));
    });

    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = window.innerWidth <= 760;
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideNav: currentHideNav });
    }
  }

  ProjectBlock = () => {
    const style = {
      pcDisplay: {
        maxWidth: '400px',
        maxHeight: '450px',
        width: '450px',
        
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }
    }
    return (
      <div style={style.container}>
        {this.state.projects.map(result => {
          return (
            <ProjectCard
              style={style.pcDisplay}
              hideNav={this.state.hideNav}
              text={result.text}
              text2={result.text2}
              products={result.products}
              address={result.address}
              link={result.id}
              key={result.id}
              url={this.state.path + '/' + result.path}
              description={result.description}
              projectid={result.id}
            ></ProjectCard>
          );
        })}
      </div>
    );
  };

  render() {
    const path = 'http://18.189.49.66:3000';

    const styles = {
      h1: {
        marginTop: '50px',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '50px',
        textTransform: 'uppercase',
        color: '#535353',
        textAlign: 'center'
      }
    };

    return (
      <BurgerMenu
              logo={path + '/images/logos_Headmann-big.png'}
            >
        <h1 style={styles.h1}>Projects</h1>
        <div>
          <this.ProjectBlock></this.ProjectBlock>
        </div>
      </BurgerMenu>
    );
  }
}

export default Projects;
