import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './guest-name';

const PendingGuest = props => {
  if (props.name) {
    <li className="pending">
      <span>
        {props.name}
      </span>
    </li>
  }
  return null;
}

PendingGuest.propTypes = {
  name: PropTypes.string.isRequired,
}

export default PendingGuest;
