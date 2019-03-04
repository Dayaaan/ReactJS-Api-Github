import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ReactEmoji from 'react-emoji';

/**
 * Local import
 */

/**
 * Code
 */
const GridCard = ({
  name,
  fullname,
  avatar,
  description,
  getContent,
  url,
}) => (
  <Card
    onClick={getContent(url)}
    image={avatar}
    header={name}
    meta={fullname}
    description={ReactEmoji.emojify(description)}
  />
);

GridCard.propTypes = {
  fullname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  getContent: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default GridCard;
