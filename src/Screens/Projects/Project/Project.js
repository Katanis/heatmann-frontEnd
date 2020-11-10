import React from 'react';
import BurgerMenu from '../../../Components/NavigationMenu/BurgerMenu';
import MainImage from '../../../Components/MainImage/MainImage';
import MobileScreen from './Displays/Mobile';
import Desktop from './Displays/Desktop';
import axios from 'axios';

class Project extends React.Component {
    state = {
        url: 'http://18.189.49.66:3000/',
        logo: 'http://18.189.49.66:3000/images/logos_Headmann-big.png',
        hideNav: null,
        projectImages: [],
        allowToRender: true,
    };

    componentDidMount() {
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    }

    getProjectsImagesHandler(id) {
        axios
            .get(this.state.url + 'api/project_child_images/' + id)
            .then((res) => {
                const projectImages = res.data;
                this.setState({
                    projectImages: projectImages.result,
                    allowToRender: false,
                });
            });
    }

    resize() {
        let currentHideNav = window.innerWidth <= 760;
        if (currentHideNav !== this.state.hideNav) {
            this.setState({ hideNav: currentHideNav });
        }
    }

    render() {
        const { description } = this.props.location.state;
        const { text } = this.props.location.state;
        const { url } = this.props.location.state;
        const { text2 } = this.props.location.state;
        const { products } = this.props.location.state;
        const { address } = this.props.location.state;
        const { projectid } = this.props.location.state;
        const { link } = this.props.location.state;

        const style = {
            mainImage: {
                position: 'relative',
                textAlign: 'center',
                maxWidth: '100%',
                backgroundSize: 'cover',
                height: '70vw',
                maxHeight: '450px',
                border: '1px #FFFFFF',
                borderRadius: '5px',
            },
            textBottom: {
                position: 'absolute',
                bottom: '0',
                left: '10px',
                fontFamily: 'Oswald',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '20px',
                textTransform: 'uppercase',
                color: '#FFFFFF',
            },
            projectYear: {
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '14px',
                lineHeight: '16px',
                paddingLeft: '10px',
                color: '#535353',
            },
            text: {
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '12px',
                lineHeight: '15px',
                paddingLeft: '10px',
                color: '#535353',
            },
        };
        return (
            <BurgerMenu logo={this.state.logo}>
                {/* project {this.props.match.params.name} */}
                {this.state.hideNav ? (
                    <MobileScreen
                        {...(this.state.allowToRender
                            ? this.getProjectsImagesHandler(projectid)
                            : null)}
                        description={description}
                        text={text}
                        url={url}
                        text2={text2}
                        products={products}
                        address={address}
                        projectImages={this.state.projectImages}
                    ></MobileScreen>
                ) : (
                    <Desktop
                        {...(this.state.allowToRender
                            ? this.getProjectsImagesHandler(projectid)
                            : null)}
                        description={description}
                        text={text}
                        url={url}
                        text2={text2}
                        products={products}
                        address={address}
                        projectImages={this.state.projectImages}
                    ></Desktop>
                )}
            </BurgerMenu>
        );
    }
}

export default Project;
