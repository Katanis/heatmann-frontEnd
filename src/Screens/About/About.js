import React, { Suspense } from 'react';
import BurgerMenu from '../../Components/NavigationMenu/BurgerMenu';
import { useTranslation } from 'react-i18next';

class About extends React.Component {
  render() {
    const path = 'http://18.189.49.66:3000';

    const styles = {
      h1: {
        fontSize: '28px',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
      p: {
        fontSize: '18px',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: '300',
        color: 'rgb(83, 83, 83)',
      },
    };

    function MyComponent() {
      const { t, i18n } = useTranslation();

      return (
        <div>
          <h1 style={styles.h1}>{t('data.about.title')}</h1>
          <p style={styles.p}>{t('data.about.description1')}</p>
          <h3 style={styles.h1}>{t('data.about.title2')}</h3>
          <p style={styles.p}>{t('data.about.description2')}</p>
          <h3 style={styles.h1}>{t('data.about.title3')}</h3>
          <p style={styles.p}>{t('data.about.description3')}</p>
          <h3 style={styles.h1}>{t('data.about.title4')}</h3>
          <p style={styles.p}>{t('data.about.description4')}</p>
          <h3 style={styles.h1}>{t('data.about.title5')}</h3>
          <p style={styles.p}>{t('data.about.description5')}</p>
        </div>
      );
    }

    return (
      <BurgerMenu logo={path + '/images/logos_Headmann-big.png'}>
        <Suspense fallback="loading">
          <MyComponent />
        </Suspense>
      </BurgerMenu>
    );
  }
}

export default About;
