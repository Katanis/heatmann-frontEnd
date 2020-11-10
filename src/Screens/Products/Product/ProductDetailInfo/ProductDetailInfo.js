import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const DetailInfo = (props) => {
    let [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            let url =
                'http://18.189.49.66:3000/api/product/detail_info/' +
                props.customKey;
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
            width: '100px',
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
            // margin: '15px 15px 15px 0',
        },
    };
    const { t, i18n } = useTranslation();

    return (
        <div>
            {props.data ? (
                <div>
                    {props.data[0] !== undefined ? (
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    margin: '10px',
                                }}
                            >
                                <h1 style={style.title}>
                                    {t('data.product.title')}
                                </h1>
                                <div
                                    style={{
                                        borderLeft: '2px solid rgb(249, 99, 2)',
                                        paddingLeft: '10px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            width: '250px'
                                        }}
                                    >
                                        <span>{t('data.product.width')}</span>{' '}
                                        <span>{t('data.product.height')}</span>{' '}
                                        <span>{t('data.product.length')}</span>{' '}
                                        <span>
                                            {t(
                                                'data.product.height_adjustment'
                                            )}
                                        </span>
                                        <span>
                                            {t(
                                                'data.product.stainless_trought'
                                            )}
                                        </span>
                                        {props.data[0].grill_type !== null ? (
                                            <span>
                                                {t('data.product.grill_type')}
                                            </span>
                                        ) : null}
                                        {props.data[0].grill_material !==
                                        null ? (
                                            <span>
                                                {t(
                                                    'data.product.grill_material'
                                                )}
                                            </span>
                                        ) : null}
                                        <span>
                                            {t('data.product.heat_m_c')}
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderLeft:
                                                '2px solid rgb(249, 99, 2)',
                                            paddingLeft: '10px',
                                            marginLeft: '10px',
                                        }}
                                    >
                                        <span>{props.data[0].width}</span>
                                        <span>{props.data[0].height}</span>
                                        <span>{props.data[0].length}</span>
                                        <span>
                                            {props.data[0].height_adjustment}
                                        </span>
                                        <span>
                                            {props.data[0].stainless_trought}
                                        </span>
                                        {props.data[0].grill_type !== null ? (
                                            <span>
                                                {props.data[0].grill_type}
                                            </span>
                                        ) : null}
                                        {props.data[0].grill_material !==
                                        null ? (
                                            <span>
                                                {props.data[0].grill_material}
                                            </span>
                                        ) : null}
                                        <span>
                                            {
                                                props.data[0]
                                                    .heat_medium_connection
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    margin: '10px',
                                }}
                            >
                                <h1 style={style.title}>
                                    {t('data.product.title2')}
                                </h1>
                                <div
                                    style={{
                                        borderLeft: '2px solid rgb(249, 99, 2)',
                                        paddingLeft: '10px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                        width: '250px'

                                        }}
                                    >
                                        {props.data[0].max_temp !== null ? (
                                                <span>
                                                    {t('data.product.max_w_t')}
                                                </span>
                                        ) : null}
                                        {props.data[0].working_pressure !==
                                        null ? (
                                                <span>
                                                    {t(
                                                        'data.product.work_overpressure'
                                                    )}
                                                </span>
                                        ) : null}
                                        {props.data[0].grill_material !==
                                        null ? (
                                                <span>
                                                    {t(
                                                        'data.product.m_work_overpressure'
                                                    )}
                                                </span>
                                        ) : null}
                                        {props.data[0].ambient_temp !== null ? (
                                                <span>
                                                    {t(
                                                        'data.product.ambient_temp'
                                                    )}
                                                </span>
                                        ) : null}
                                        {props.data[0].relative_humidity !==
                                        null ? (
                                                <span>
                                                    {t('data.product.rel_hum')}
                                                </span>
                                        ) : null}
                                        {props.data[0].operating_voltage !==
                                        null ? (
                                                <span>
                                                    {t('data.product.op_volt')}
                                                </span>
                                        ) : null}
                                        {props.data[0].protection_class !==
                                        null ? (
                                                <span>
                                                    {t(
                                                        'data.product.protect_class'
                                                    )}
                                                </span>
                                        ) : null}
                                        {props.data[0].control !== null ? (
                                                <span>
                                                    {t('data.product.control')}
                                                </span>
                                        ) : null}
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderLeft:
                                                '2px solid rgb(249, 99, 2)',
                                            paddingLeft: '10px',
                                            marginLeft: '10px',
                                        }}
                                    >
                                        {props.data[0].max_temp !== null ? (
                                                <span>
                                                    {props.data[0].max_temp}
                                                </span>
                                        ) : null}
                                        {props.data[0].working_pressure !==
                                        null ? (
                                                <span>
                                                    {
                                                        props.data[0]
                                                            .working_pressure
                                                    }
                                                </span>
                                        ) : null}
                                        {props.data[0].grill_material !==
                                        null ? (
                                                <span>
                                                    {props.data[0].max_pressure}
                                                </span>
                                        ) : null}
                                        {props.data[0].ambient_temp !== null ? (
                                                <span>
                                                    {props.data[0].ambient_temp}
                                                </span>
                                        ) : null}
                                        {props.data[0].relative_humidity !==
                                        null ? (
                                                <span>
                                                    {
                                                        props.data[0]
                                                            .relative_humidity
                                                    }
                                                </span>
                                        ) : null}
                                        {props.data[0].operating_voltage !==
                                        null ? (
                                                <span>
                                                    {
                                                        props.data[0]
                                                            .operating_voltage
                                                    }
                                                </span>
                                        ) : null}
                                        {props.data[0].protection_class !==
                                        null ? (
                                                <span>
                                                    {
                                                        props.data[0]
                                                            .protection_class
                                                    }
                                                </span>
                                        ) : null}
                                        {props.data[0].control !== null ? (
                                                <span>
                                                    {props.data[0].control}
                                                </span>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            ) : (
                <span>Loading</span>
            )}
        </div>
    );
};

export default DetailInfo;
