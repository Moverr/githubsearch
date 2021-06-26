import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
 
const Avatar = ({ image }) => (
  <div>
    <LazyLoadImage   src={image}    />
    
  </div>
);
 
export default Avatar;