import React from 'react';
import BurgerMenu from '../../Components/NavigationMenu/BurgerMenu';

class About extends React.Component {
  render() {
    const path = 'http://18.189.49.66:3000';

    const styles = {
      h1: {
        fontSize: '28px',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: 'normal'
      },
      p: {
        fontSize: '18px',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: '300',
        color: 'rgb(83, 83, 83)',
      },
    };

    return (
      <BurgerMenu logo={path + '/images/logos_Headmann-big.png'}>
        <h1 style={styles.h1}>About us</h1>
        <p style={styles.p}>
          HEATMANN GmbH was established in a small German village of Bückeburg
          in 2013. HEATMANN is a new, but rapidly advancing heaters
          manufacturer. We are proud of our team of highly professional
          engineers, architects, designers and other partners who produce
          innovative heating solutions.
        </p>
        <h3 style={styles.h1}>Our Vision</h3>
        <p style={styles.p}>
          Our main goal is to integrate the latest technologies, ergonomic
          management and maintenance with energy efficiency and an attractive
          and distinctive design. HEATMANN aims to manufacture heating equipment
          which would be energy efficient and outstanding in design and
          comfortability.
        </p>
        <h3 style={styles.h1}>Evolution</h3>
        <p style={styles.p}>
          HEATMANN introduced its first products to the German market in the
          autumn of 2013. In the spring of 2014 company has introduced its
          production in United Kingdom, Switzerland, Austria, France, Italy,
          Spain, Russia and Poland.
        </p>
        <h3 style={styles.h1}>Products</h3>
        <p style={styles.p}>
          At the moment HEATMANN manufactures “freestanding / wall mounted
          convectors” and “trench convectors”. These products were in
          development, including testing and upgrades for more than 9 months.
          After the launch of mass production, products have become high in
          demand because of their unique technological solutions and attractive
          appearance. Later in 2014 HEATMANN plans to introduce its newly
          created convectors for houses, public places and industrial buildings.
        </p>
        <h3 style={styles.h1}>Technologies and Innovations</h3>
        <p style={styles.p}>
          HEATMANN founded its own laboratory, which performs continuous testing
          and creates innovative solutions for their products to get the best
          results, and become a leader in Western Europe. Laboratory has 5
          professional and highly experienced German scientists and engineers.
        </p>
      </BurgerMenu>
    );
  }
}

export default About;
