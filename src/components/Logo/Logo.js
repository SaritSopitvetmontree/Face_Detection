import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Tilt scale={1.5} tiltMaxAngleX={20} tiltMaxAngleY={20} style={{ height:'120px',width:'120px'}}>
                <img alt='logo' src={brain}/>
            </Tilt>
        </div>
    );
}

export default Logo;