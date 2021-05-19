import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NumberButton from '../../atoms/Pagination/NumberButton';

const Container = styled.div`
  display: flex;
  > * {
    margin: 0 0.3rem;
  }
`;
const NumberButtonGroup = ({ size, nowPage, maxPage, onClick }) => {
  // const [isSelected, setIsSelected] = useState(
  //   new Array(size.length).fill(false)
  // );
  const [buttons, setButtons] = useState();

  const arrangeButtons = () => {
    const decNum = parseInt((nowPage - 1) / 10, 10);
    // const rest = nowPage % 10;
    let startNum = 0;

    if (decNum < 1) {
      startNum = 1;
    } else {
      startNum = decNum * 10 + 1;
    }

    const buttonArray = [];
    for (let index = 0; index < size; index += 1) {
      const pageNum = startNum + index;
      if (pageNum > maxPage) break;
      buttonArray.push(
        <NumberButton
          text={pageNum}
          isSelected={nowPage === parseInt(pageNum, 10)}
          onClick={() => {
            onClick(pageNum);
          }}
        />
      );
    }

    setButtons(buttonArray);
  };
  useEffect(() => {
    console.log(nowPage);
    console.log(maxPage);
    arrangeButtons();
  }, []);

  return <Container>{buttons}</Container>;
};

NumberButtonGroup.defaultProps = {
  size: 10,
  nowPage: 1,
  maxPage: 10000,
  onClick: () => {}
};
NumberButtonGroup.propTypes = {
  size: PropTypes.number,
  nowPage: PropTypes.number,
  maxPage: PropTypes.number,
  onClick: PropTypes.func
};

export default NumberButtonGroup;
