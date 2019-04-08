import Styled from 'styled-components';

const colors = {
  bg: 'transparent'
};

export const DdList = Styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-top: 0;
  padding: .3em 0;
`;

export const DdLine = Styled.div`
  display: flex;
  align-items: center;
`;

export const DdCurrent = Styled.div`
  padding: 0.5em .75em;
  flex: 1;
`;

export const DdArrow = Styled.div`
  padding-right: 0.4em;
  pointer-events: none;
  flex: 0;

  svg, img {
    width: 1.5em;
    display: block;
    fill: #080808;
  }
`;

export const Dd = Styled.div`
  background-color: ${colors.bg};
  cursor: pointer;
  flex: 1 1 auto;
  line-height: 1.5;
  user-select: none;
  border: 1px solid #ddd;
  transition: all 0.1s ease;
  ${props => props.isOpen
    && `
    ${DdArrow} svg { fill: #2e41ad } 
  `}
`;

export const Radio = Styled.span``;

export const Checkbox = Styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 0.5em;
  vertical-align: text-top;
  border: 2px solid gray;
  border-radius: 2px;
  position: relative;

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 2px;
    height: 2px;
    top: 6px;
    left: 2px;
    background-color: #fff;
    box-shadow: 0 2px 0 0 #fff, 2px 2px 0 0 #fff, 4px 2px 0 0 #fff,
      6px 2px 0 0 #fff;
    transform: rotate(-45deg);
    opacity: 0;
    transition: opacity 0.15s ease;
  }
`;

export const Item = Styled.div`
  padding: 0.3em .75em;
  background-color: ${colors.bg};
  transition: all 0.15s ease;
  cursor: pointer;
  user-select: none;
  line-height: 1.5;

  &:hover {
    background-color: #2e41ad;
    color: #fff;
  }

  ${props => props.isSelected
    && `

    ${Checkbox} {
      border-color: green;
      background-color: green;
      &:after {
        opacity: 1;
      }
    }
  `}
`;
