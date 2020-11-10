import React, { Suspense } from 'react';
import axios from 'axios';
import BurgerMenu from '../../Components/NavigationMenu/BurgerMenu';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
// import Controller from './Controller';
// import { firestore } from '../../firebase';

class Projects extends React.Component {
    state = {
        projects: [],
        path: 'http://18.189.49.66:3000',
        hideNav: null,
        firebaseProjects: [],
    };

    componentDidMount() {
        axios.get(this.state.path + '/api/projects').then((res) => {
            const projects = res.data;
            this.setState({ projects: projects.project });
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
                justifyContent: 'space-evenly',
            },
        };
        return (
            <div style={style.container}>
                {this.state.projects.map((result) => {
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
                textAlign: 'center',
            },
        };

        function MyComponent() {
            const { t, i18n } = useTranslation();

            return <h1 style={styles.h1}>{t('data.projects.title')}</h1>;
        }

        return (
            <BurgerMenu logo={path + '/images/logos_Headmann-big.png'}>
                <Suspense fallback="loading">
                    <MyComponent />
                </Suspense>
                <div>
                    <this.ProjectBlock></this.ProjectBlock>
                </div>
            </BurgerMenu>
        );
    }
}

export default Projects;
