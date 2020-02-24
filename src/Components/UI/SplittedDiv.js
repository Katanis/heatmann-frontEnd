import React from 'react';

const style = {
  container: {
    display: 'flex'
  }
}

const split = props => {
  

  return(
    <div style={props.screen ? {display: 'flex', flexDirection: 'column'} : {display: 'flex'}}>
      <div style={{width: '-webkit-fill-available'}}>
        {props.left}
      </div>
      <div style={{width: '-webkit-fill-available'}}>
        {props.right}
      </div>
    </div>
  )
}

export default split;