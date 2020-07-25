import React from 'react';
import { ReactComponent as LoadingSvg } from '../../../assets/svg-loaders/oval.svg';
import { getCSSvariableValue } from '../../../utils/helpers';

const Spinner = ({style}) => {

    return (   <LoadingSvg style={{ stroke: getCSSvariableValue('--bg-accent-color') , ...style }} />  );
}

export default Spinner;