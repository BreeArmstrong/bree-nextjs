import React from 'react';
import Image from 'next/image';

function HeroImage(props) {
    const images = props.images;
    return (
      <>
      {/* TODO: Figure out how to transition between image */}
        {images.map((img) => (
          <div className='slide'>
            <Image className='rounded-full mx-auto object-cover w-40 h-40' src={img} width={128} height={128} />
          </div>
        ))}
      </>
    )
}



export default HeroImage;