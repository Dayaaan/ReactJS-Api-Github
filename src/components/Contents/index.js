/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

/**
 * Local import
 */
import Element from './Element';
import './contents.scss';

/**
 * Code
 */
const Contents = ({ contents }) => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Git Repository</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {contents.map(element => (
        <Element key={element.sha} {...element} />
      ))}
    </Table.Body>
  </Table>
);

Contents.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.shape({
    sha: PropTypes.string.isRequired,
  })).isRequired,
};

/**
 * Export
 */
export default Contents;
