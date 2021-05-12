import React from 'react';
import styled from 'styled-components';
import MyInfoItem from '../../atoms/MyInfoItem/MyInfoItem';

const MyInfoWrapper = styled.div`
  margin-right: 0;
  @media ${props => props.theme.mobile} {
    display: none;
    width: 100%;
  }
  @media ${props => props.theme.laptop} {
    margin-right: 40px;
  }
  @media ${props => props.theme.desktop} {
    margin-right: 80px;
  }
`;
const ItemBox = styled.ul`
  display: flex;
  align-items: center;
  @media ${props => props.theme.mobile} {
    width: 100%;
  }
`;

const DivideLine = styled.span`
  border-left: 1px solid #dfe1e5;
  height: 30%;
`;

const HeaderMyInfo = () => {
  return (
    <MyInfoWrapper>
      {localStorage.getItem('token') ? (
        <ItemBox>
          <MyInfoItem href="/login">내정보</MyInfoItem>
          <DivideLine />
          <MyInfoItem href="/register">로그아웃</MyInfoItem>
        </ItemBox>
      ) : (
        <ItemBox>
          <MyInfoItem href="/login">로그인</MyInfoItem>
          <DivideLine />
          <MyInfoItem href="/register">회원가입</MyInfoItem>
        </ItemBox>
      )}
    </MyInfoWrapper>
  );
};
HeaderMyInfo.propTypes = {};

HeaderMyInfo.defaultProps = {};

export default HeaderMyInfo;
