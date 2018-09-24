import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = props =>
  <form onSubmit={this.newGuestSubmitHandler}>
      <input
        type="text"
        placeholder="Invite Someone"
        value={this.pendingGuest}
        onChange={this.handleNameInput} />
      <button type="submit" name="submit" value="submit">Submit</button>
  </form>

GuestInputForm.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired,
}

export default GuestInputForm;
