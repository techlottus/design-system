import React from 'react';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import GlideContainer from '../../packages/Glide';

const images = [
  'https://ucarecdn.com/955820e5-2a92-4fdd-ad2c-d29ee63ccaef/-/resize/760x/-/format/webp/',
  'https://ucarecdn.com/e6aeac29-3236-4b72-abc0-ce084f924d5a/-/resize/760x/-/format/webp/',
  'https://ucarecdn.com/74d2631e-2904-42b5-a347-99d3f4a062d8/-/resize/760x/-/format/webp/'
];

const GlideExample = () => {
  return (
    <GlideContainer element='glide' type='carousel'>
      {images.map((image, index) => (
        <picture key={index}>
          <source srcSet={image} type='image/webp' />
          <img srcSet={image} alt={`Demo Image-${index}`} className='w-full h-full rounded' />
        </picture>
      ))}
    </GlideContainer>
  );
};

export default GlideExample;
