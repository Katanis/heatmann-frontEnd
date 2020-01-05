import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DetailInfo = props => {
  let [data, setData] = useState(null);

  const style = {
    title: {
      textAlign: 'left',
      fontFamily: 'Oswald',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '36px',
      lineHeight: '118.2%',
      textTransform: 'uppercase',
      color: '#535353',
      margin: '4%'
    },
    description: {
      textAlign: 'left',
      fontFamily: 'Oswald',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '118.2%',
      textTransform: 'uppercase',
      color: '#535353',
      margin: '15px'
    }
  };

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
    <div>
      <h1 style={style.title}>Technical Information</h1>
      {data !== null ? (
        <div>
          <p style={style.description}>
            <span>Width: </span> <span>{data[0].width}</span>
          </p>
          <p style={style.description}>
            <span>Height: </span> <span>{data[0].height}</span>
          </p>
          <p style={style.description}>
            <span>Length: </span> <span>{data[0].length}</span>
          </p>
          <p style={style.description}>
            <span>Height Adjustment: </span>{' '}
            <span>{data[0].height_adjustment}</span>
          </p>
          <p style={style.description}>
            <span>Stainless Trought: </span>{' '}
            <span>{data[0].stainless_trought}</span>
          </p>
          {data[0].grill_type !== null ? (
            <p style={style.description}>
              <span>Grill type: </span> <span>{data[0].grill_type}</span>
            </p>
          ) : null}
          {data[0].grill_material !== null ? (
            <p style={style.description}>
              <span>Grill material: </span>{' '}
              <span>{data[0].grill_material}</span>
            </p>
          ) : null}
          <p style={style.description}>
            <span>Heat medium connection: </span>{' '}
            <span>{data[0].heat_medium_connection}</span>
          </p>
          <h1 style={style.title}>Operating Conditions</h1>
          {data[0].max_temp !== null ? (
            <p style={style.description}>
              <span>Max. working temperature: </span>{' '}
              <span>{data[0].max_temp}</span>
            </p>
          ) : null}
          {data[0].working_pressure !== null ? (
            <p style={style.description}>
              <span>Working overpressure: </span>{' '}
              <span>{data[0].working_pressure}</span>
            </p>
          ) : null}
          {data[0].grill_material !== null ? (
            <p style={style.description}>
              <span>Max. working overpressure: </span>{' '}
              <span>{data[0].max_pressure}</span>
            </p>
          ) : null}
          {data[0].ambient_temp !== null ? (
            <p style={style.description}>
              <span>Ambient temperature: </span>{' '}
              <span>{data[0].ambient_temp}</span>
            </p>
          ) : null}
          {data[0].relative_humidity !== null ? (
            <p style={style.description}>
              <span>Relative humidity: </span>{' '}
              <span>{data[0].relative_humidity}</span>
            </p>
          ) : null}

          {data[0].operating_voltage !== null ? (
            <p style={style.description}>
              <span>Operating voltage: </span>{' '}
              <span>{data[0].operating_voltage}</span>
            </p>
          ) : null}
          {data[0].protection_class !== null ? (
            <p style={style.description}>
              <span>Protection class: </span>{' '}
              <span>{data[0].protection_class}</span>
            </p>
          ) : null}
          {data[0].control !== null ? (
            <p style={style.description}>
              <span>Control : </span> <span>{data[0].control}</span>
            </p>
          ) : null}
        </div>
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
};

export default DetailInfo;
