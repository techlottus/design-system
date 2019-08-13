import * as React from 'react';

interface GlideSlideProps {
  children: React.ReactChild;
}

const GlideItem = ({ children }: GlideSlideProps) => <div className='glide__slide'>{children}</div>;

export default GlideItem;
