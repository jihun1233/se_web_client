import React from 'react';
import styled from 'styled-components';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import palette from '../../../libs/palette';

const MenuToggle = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  vertical-align: middle;

  padding: 0;
  border: none;
  border-radius: 50%;
  background: #fff;

  text-decoration: none;
  color: ${palette.gray[8]};
  color: ${props => props.theme.mainColor};

  @media ${props => props.theme.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HeaderMenuToggle = ({ onClick }) => {
  return (
    <MenuToggle onClick={onClick}>
      <FontAwesomeIcon icon={faBars} size="lg" />
    </MenuToggle>
  );
};
HeaderMenuToggle.propTypes = {};

HeaderMenuToggle.defaultProps = {};

export default HeaderMenuToggle;
