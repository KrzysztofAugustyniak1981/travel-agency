import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../utils/formatPrice';

import styles from './OrderOption.scss';

const OrderOptionNumber = ({ currentValue, limits, setOptionValue, price }) => (
  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      type="number"
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
    {formatPrice(price)}
  </div >
);


OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};

export default OrderOptionNumber;