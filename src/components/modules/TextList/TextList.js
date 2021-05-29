import React from 'react';
import PropTypes from 'prop-types';
import TextLine from '../../atoms/TextLine/TextLine';

const TextList = ({ textData }) => {
  return (
    <div>
      {textData ? textData.map(text => <TextLine>{text}</TextLine>) : ''}
    </div>
  );
};

TextList.propTypes = { textData: PropTypes.arrayOf([]).isRequired };

export default TextList;
