import React from 'react';
import PropTypes from 'prop-types';
import { Svg } from './angle.styled';

const Angle = ({ direction, isExternal }) => (
  <Svg width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" direction={direction} isExternal={isExternal}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-777.000000, -1794.000000)" fill="#000000">
        <g transform="translate(777.000000, 1794.000000)">
          <rect transform="translate(4.512096, 11.396093) rotate(-44.000000) translate(-4.512096, -11.396093) " x="-0.987904393" y="10.5960929" width="11" height="1.60000002" rx="0.800000012" />
          <rect transform="translate(4.512096, 4.796117) rotate(44.000000) translate(-4.512096, -4.796117) " x="-0.987904393" y="3.99611729" width="11" height="1.60000002" rx="0.800000012" />
        </g>
      </g>
    </g>
  </Svg>
);

Angle.propTypes = {
  direction: PropTypes.oneOf(['up', 'right', 'down', 'left']),
};

export default Angle;
