import React from 'react';
import PropTypes from 'prop-types';
import TextLine from '../../atoms/TextLine/TextLine';

const SelectList = ({ textData, selectData }) => {
  return (
    <div>
      {textData
        ? textData.map(text => (
            <TextLine
              isSelected={text.value === selectData}
              onClick={text.onClick}
              hover
            >
              {text.text}
            </TextLine>
          ))
        : ''}
    </div>
  );
};
SelectList.defaultProps = {
  selectData: ''
};
SelectList.propTypes = {
  textData: PropTypes.arrayOf([]).isRequired,
  selectData: PropTypes.string
};

export default SelectList;
