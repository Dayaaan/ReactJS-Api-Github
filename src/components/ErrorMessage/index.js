/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

/**
 * Local import
 */
import './errormessage.scss';

/**
 * Code
 */

const ErrorMessage = ({ message }) => (
  <div id="error-message">
    <Message negative>
      <Message.Header>Erreur :O</Message.Header>
      <p>{message}</p>
    </Message>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default ErrorMessage;
