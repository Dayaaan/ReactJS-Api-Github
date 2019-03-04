import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

/**
 * Code
 */
const Switcher = ({ onSwitch, currentMode }) => (
  <Button.Group>
    <Button positive={currentMode === 'list'} onClick={onSwitch('list')}>List</Button>
    <Button.Or />
    <Button positive={currentMode === 'grid'} onClick={onSwitch('grid')}>Grid</Button>
  </Button.Group>
);

Switcher.propTypes = {
  onSwitch: PropTypes.func.isRequired,
  currentMode: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Switcher;
