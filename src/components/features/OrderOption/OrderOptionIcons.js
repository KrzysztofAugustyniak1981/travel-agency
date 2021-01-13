import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({ values, required, currentValue, setOptionValue }) => (
  <div className={styles.component}>
    {required ? (false || '') : (
      <div
        className={styles.icon}
        onClick={() => setOptionValue('')}
      >
        <Icon name={'times-circle'} />
          none
      </div>
    )}
    {values.map(value => (
      <div
        className={value.id == currentValue ? styles.iconActive : styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >{console.log(value.id, currentValue)}
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>))}
  </div>);
OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.func,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;