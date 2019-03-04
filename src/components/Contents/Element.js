/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Table } from 'semantic-ui-react';

/**
 * Local import
 */
import './contents.scss';

/**
 * Code
 */
const icons = {
  file: 'file outline',
  dir: 'folder',
};

const Element = ({ name, type }) => (
  <Table.Row>
    <Table.Cell collapsing>
      <Icon name={icons[type]} />
      {name}
    </Table.Cell>
  </Table.Row>
);

Element.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default Element;
