/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

/**
 * Local import
 */
import GridCard from './GridCard';
import ListCard from './ListCard';
import Switcher from './Switcher';
import './repos.scss';

/**
 * Code
 */
const format = {
  grid: GridCard,
  list: ListCard,
};

// On va gérer 2 modes de présentation
// List : listing simpliste des repos
// Grid : listing avec des items enrichis
const Repos = ({
  items,
  displayMode,
  onSwitch,
  onGetContent,
}) => {
  const Viewer = format[displayMode];
  return (
    <div id="repos">
      <Switcher onSwitch={onSwitch} currentMode={displayMode} />
      <Card.Group centered id="listing">
        {items.map(item => (
          <Viewer
            key={item.id}
            {...item}
            getContent={onGetContent}
          />
        ))}
      </Card.Group>
    </div>
  );
};

Repos.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  displayMode: PropTypes.string,
  onSwitch: PropTypes.func.isRequired,
  onGetContent: PropTypes.func.isRequired,
};

Repos.defaultProps = {
  displayMode: 'grid',
};
/**
 * Export
 */
export default Repos;
