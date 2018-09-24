import React from 'react';
import PropTypes from 'prop-types';

import Guest from './guest';
import PendingGuest from './pending-guest';

const GuestList = props =>
  <ul>
    <PendingGuest name={props.pendingGuest} />
    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed)
      .map((guest, index) =>
        <Guest
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          handleConfirmation={() => props.toggleConfirmationAt(guest.id)}
          handleEditing={() => props.toggleEditingAt(guest.id)}
          setName={text => props.setNameAt(text, guest.id)}
          handleRemove={() => props.removeGuestAt(guest.id)} />
    )}
  </ul>

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
}

export default GuestList;
