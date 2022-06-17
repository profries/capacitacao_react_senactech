import React from 'react';
import { useState } from 'react';

function Carroussel(props) {
    const [slideIndex, setSlideIndex] = useState(1);
    const length = 2;

    return (
        <div class="w3-content w3-display-container" style={{maxWidth: "800px"}}>
            
			<img className="mySlides" alt="curso" src="curso2.jpeg" style={{width:"100%"}} />
			<img className="mySlides" alt="curso" src="curso3.jpeg" style={{width:"100%"}} />

			<div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style={{width:"100%"}}>
				<div className="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>
				<div className="w3-right w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>
			  	<span className="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
			  	<span className="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
			</div>
		</div>
    );
}

export default Carroussel;