/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import EnhanceWithClickOutside from './enhanceWithClickOutside';
import DropdownList from './DropdownList';
import DownArrow from './chevron-down.svg';
import {
  Dd,
  DdList,
  DdLine,
  DdCurrent,
  DdArrow,
  Checkbox,
  Radio
} from './styledComponents';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    this.detectPlacement();
    window.addEventListener('resize', this.detectPlacement);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.detectPlacement);
  }

  handleClickOutside = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  };

  detectPlacement = () => {
    const target = ReactDOM.findDOMNode(this.wrapper);
    this.parentFontSize = window
      .getComputedStyle(ReactDOM.findDOMNode(this.wrapper))
      .getPropertyValue('font-size');
    this.setState({ a: target.getBoundingClientRect() });
  };

  toggleDropdown = () => {
    this.setState({ isOpen: !this.state.isOpen });
    this.detectPlacement();
  };

  handleClick = item => () => {
    const { value, children } = item.props;

    let newCurrentArr = [];
    if (this.props.isMultiple) {
      if (this.isIn(this.props.current, value)) {
        newCurrentArr = [...this.props.current];
        newCurrentArr = newCurrentArr.filter(t => t.value !== value);
      } else {
        newCurrentArr = [...this.props.current];
        newCurrentArr.push({ value: value, label: children });
      }
    } else {
      newCurrentArr = [{ value: value, label: children }];
    }
    this.props.update(newCurrentArr);

    !this.props.isMultiple && this.toggleDropdown();
  };

  isSelected = (item) => {
    return this.isIn(this.props.current, item.props.value);
  };

  isIn(arr, value) {
    return arr.findIndex(e => e.value === value) > -1;
  }

  renderChild = (c) => {
    const indicator = this.props.isMultiple ? <Checkbox /> : <Radio />;
    const nc = (
      <>
        {this.props.showCheckboxes && indicator}
        {c.props.children}
      </>
    );

    const classNameFromParent = this.props.className
      ? `${this.props.className}-item`
      : '';

    return React.cloneElement(c, {
      children: nc,
      onClick: this.handleClick(c),
      isSelected: this.isSelected(c),
      classNameFromParent: classNameFromParent
    });
  };

  renderList(props) {
    const extraListClass = props.className ? `${props.className}-list` : '';
    const extraWrapperClass = props.className
      ? `${props.className}-listPositioner`
      : '';
    const list = (
      <DdList
        className={extraListClass}
        style={{ fontSize: this.parentFontSize }}
      >
        {React.Children.map(props.children, child => this.renderChild(child))}
      </DdList>
    );
    return (
      <DropdownList className={extraWrapperClass} dimensions={this.state.a}>
        {list}
      </DropdownList>
    );
  }

  render() {
    let text = '';
    if (this.props.current.length === 1) {
      text = this.props.current[0].label;
    } else if (this.props.current.length === this.props.children.length) {
      text = 'All are selected';
    } else if (this.props.current.length > 1) {
      text = `${this.props.current.length} selected`;
    } else {
      text = this.props.placeholder;
    }

    const { isOpen } = this.state;
    const { className, name, isMultiple } = this.props;
    return (
      <Dd
        className={`${className} ${isOpen ? 'isOpen' : ''} ${isMultiple ? 'isMultiple' : ''}`}
        ref={c => (this.wrapper = c)}
        isOpen={isOpen}
        name={name}
      >
        <DdLine onClick={this.toggleDropdown}>
          <DdCurrent>{text}</DdCurrent>
          <DdArrow>
            <img src={DownArrow} alt="Arrow" />
          </DdArrow>
        </DdLine>
        {isOpen && this.renderList(this.props)}
      </Dd>
    );
  }
}

export default EnhanceWithClickOutside(Dropdown);

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  update: PropTypes.func.isRequired,
  current: PropTypes.arrayOf,
  isMultiple: PropTypes.bool,
  showCheckboxes: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Dropdown.defaultProps = {
  className: '',
  placeholder: 'Please select',
  current: [],
  isMultiple: false,
  showCheckboxes: true
};
