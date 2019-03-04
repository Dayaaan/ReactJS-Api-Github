import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

/**
 * Code
 */
const ListCard = ({
  name,
}) => (
  <Card
    fluid
    header={name}
  />
);

ListCard.propTypes = {
  name: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default ListCard;
