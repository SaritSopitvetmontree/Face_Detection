import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  const boxDisplay = box.map((eachBox) => {
    return <div className='bounding-box' style={{top: eachBox.topRow, right: eachBox.rightCol, bottom: eachBox.bottomRow, left: eachBox.leftCol}}></div>
  })
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {boxDisplay}
      </div>
    </div>
  );
}

export default FaceRecognition;