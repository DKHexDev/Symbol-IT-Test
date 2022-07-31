import React from "react";

const Close = ({ size, fill }) => {
    return (
        <svg 
            viewBox="0 0 512 512"
            height={size}
            width={size}
            fill={fill}
        >
            <g>
                <g>
                    <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
			512,452.922 315.076,256 		"/>
                </g>
            </g>
        </svg>
    )
}

export default Close;