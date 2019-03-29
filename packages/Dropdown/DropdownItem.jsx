import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './styledComponents';

export default class DropdownItem extends React.Component {
  render() {
    const {
      children,
      onClick,
      className,
      isSelected,
      classNameFromParent
    } = this.props;
    const cx = `${className} ${classNameFromParent}`;
    return (
      <Item isSelected={isSelected} className={cx} onClick={onClick}>
        {children}
      </Item>
    );
  }
}

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classNameFromParent: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

DropdownItem.defaultProps = {
  className: '',
  classNameFromParent: '',
  isSelected: false,
  onClick: () => {}
};
