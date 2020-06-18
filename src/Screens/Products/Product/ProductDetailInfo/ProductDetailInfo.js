import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const DetailInfo = (props) => {
  let [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let url =
        'http://18.189.49.66:3000/api/product/detail_info/' + props.customKey;
      const result = await axios.get(url);
      setData(result.data.data);
    };

    getData();
  }, []);

  return (
    <Suspense fallback="loading">
      <MyComponent data={data} />
    </Suspense>
  );
};

const MyComponent = (props) => {
  let TitleSize = '36px';
  props.fullScreen ? (TitleSize = '36px') : (TitleSize = '20px');
  let descriptionSize = '16px';
  props.fullScreen ? (descriptionSize = '16px') : (descriptionSize = '14px');
  const style = {
    title: {
      textAlign: 'left',
      fontFamily: 'Oswald',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: TitleSize,
      lineHeight: '118.2%',
      textTransform: 'uppercase',
      color: '#535353',
      padding: '20px 20px 20px 0',
    },
    description: {
      textAlign: 'left',
      fontFamily: 'Oswald',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: descriptionSize,
      lineHeight: '118.2%',
      textTransform: 'uppercase',
      color: '#535353',
      margin: '15px 15px 15px 0',
    },
  };
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1 style={style.title}>{t('data.product.title')}</h1>
      {props.data ? (
        <div>
          {props.data[0] !== undefined ? (
            <div>
              <p style={style.description}>
                <span>{t('data.product.width')}</span> <span>{props.data[0].width}</span>
              </p>
              <p style={style.description}>
                <span>{t('data.product.height')}</span> <span>{props.data[0].height}</span>
              </p>
              <p style={style.description}>
                <span>{t('data.product.length')}</span> <span>{props.data[0].length}</span>
              </p>
              <p style={style.description}>
                <span>{t('data.product.height_adjustment')}</span>{' '}
                <span>{props.data[0].height_adjustment}</span>
              </p>
              <p style={style.description}>
                <span>{t('data.product.stainless_trought')}</span>{' '}
                <span>{props.data[0].stainless_trought}</span>
              </p>
              {props.data[0].grill_type !== null ? (
                <p style={style.description}>
                  <span>{t('data.product.grill_type')}</span>{' '}
                  <span>{props.data[0].grill_type}</span>
                </p>
              ) : null}
              {props.data[0].grill_material !== null ? (
                <p style={style.description}>
                  <span>{t('data.product.grill_material')}</span>{' '}
                  <span>{props.data[0].grill_material}</span>
                </p>
              ) : null}
              <p style={style.description}>
                <span>{t('data.product.heat_m_c')}</span>{' '}
                <span>{props.data[0].heat_medium_connection}</span>
              </p>

              <h1 style={style.title}>{t('data.product.title2')}</h1>
              {props.data[0].max_temp !== null ? (
                <p style={style.description}>
                  <span>{t('data.product.max_w_t')}</span>{' '}
                  <span>{props.data[0].max_temp}</span>
                </p>
              ) : null}
              {props.data[0].working_pressure !== null ? (
                <p style={style.description}>
                  <span>{t('data.product.work_overpressure')}</span>{' '}
                  <span>{props.data[0].working_pressure}</span>
                </p>
              ) : null}
              {props.data[0].grill_material !== null ? (
                <p style={style.description}>
                  <span>{t('data.product.m_work_overpressure')}</span>{' '}
                  <span>{props.data[0].max_pressure}</span>
                </p>
              ) : null}
              {props.data[0].ambient_temp !== null ? (
                <p style={style.description}>
                  <span>{t('data.product.ambient_temp')}</span>{' '}
                  <span>{props.data[0].ambient_temp}</span>
                </p>
              ) : null}
              {props.data[0].relative_humidity !== null ? (
                <p style={style.description}>
                  <span>{t('data.product.rel_hum')}</span>{' '}
                  <span>{props.data[0].relative_humidity}</span>
                </p>
              ) : null}
              {props.data[0].operating_voltage !== null ? (
                <p style={style.description}>
                  <span>{t('data.product.op_volt')}</span>{' '}
                  <span>{props.data[0].operating_voltage}</span>
                </p>
              ) : null}
              {props.data[0].protection_class !== null ? (
                <p style={style.description}>
                  <span>{t('data.product.protect_class')}</span>{' '}
                  <span>{props.data[0].protection_class}</span>
                </p>
              ) : null}
              {props.data[0].control !== null ? (
                <p style={style.description}>
                  <span>{t('data.product.control')}</span> <span>{props.data[0].control}</span>
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : (
        <span>Loading</span>
      )}
    </div>
  )
}

export default DetailInfo;
