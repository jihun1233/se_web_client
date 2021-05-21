import React from 'react';
// import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';

const Container = styled.div`
  > .ck.ck-editor {
  }
  .ck-editor__editable {
    min-height: 20rem;0
  }
`;
const Editor = () => {
  return (
    <Container>
      <CKEditor
        editor={ClassicEditor}
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </Container>
  );
};

Editor.propTypes = {};

export default Editor;
