/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function MImage(props) {
    let {src, top = 'auto', right = 'auto', left = 'auto', bottom = 'auto'} = props;
    return (
        <>
          <img alt="logo" src={src} width="200" height="200" style={{
              position: 'absolute',
              top,
              right,
              left,
              bottom,
          }}/>
        </>
    )
}

export default MImage;
