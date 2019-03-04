/**
 * NPM import
 */
import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
import './searchbar.scss';

/**
 * Code
 */
class SearchBar extends React.Component {
  handleChange = (evt) => {
    const { value } = evt.target;
    const { onInputChange } = this.props;
    onInputChange(value);
  };

  render() {
    const { inputValue, onSubmitValue, isLoading } = this.props;
    return (
      <Form onSubmit={onSubmitValue}>
        <Form.Field>
          <Input
            value={inputValue}
            loading={isLoading}
            icon="search"
            placeholder="Saisissez une recherche..."
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    );
  }
}

SearchBar.propTypes = {
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onSubmitValue: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

SearchBar.defaultProps = {
  inputValue: '',
};
/**
 * Export
 */
export default SearchBar;
