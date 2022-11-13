import React, { useState } from "react";
import ReactECharts from 'echarts-for-react';
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { cloneDeep } from 'lodash';

const DEFAULT_OPTION = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
        },
    ],
    tooltip: {
        trigger: 'axis',
    },
}
const Echarts: React.FC<{}> = (props) => {
    const { t } = useTranslation();
    const [options, setOptions] = useState(DEFAULT_OPTION);
    const changeOptions = () => {
        let newOptions = cloneDeep(options)
        newOptions.series[0].data = newOptions.series[0].data.map(item => item * Math.random() * 1)
        setOptions(newOptions)
    }
    return (
        <div>
            <ReactECharts option={options} />
            <Button onClick={changeOptions}>{t('改变数据')}</Button>
        </div>
    )
}

export default Echarts