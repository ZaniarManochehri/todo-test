import React from 'react';
import logo from '../logo.svg';

function MImage(props) {
    let { top = 'auto', right = 'auto', left = 'auto', bottom = 'auto'} = props;
    return (
        <>
          <img src={logo} width="200" height="200" style={{
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
