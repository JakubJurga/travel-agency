import React from 'react';
import styles from './OrderSummary.scss';

import PropTypes from 'prop-types';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = ({cost, options}) => (

  <h2 className={styles.component}>
    Total: <strong>{formatPrice(calculateTotal(cost, options))}</strong>
  </h2>
);

OrderSummary.propTypes = {
  cost: PropTypes.any,
  options: PropTypes.any,
};


export default OrderSummary;
