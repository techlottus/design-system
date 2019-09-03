import * as React from 'react';

interface GlideSlideProps {
  children: React.ReactChild;
}

const GlideItem = ({ children }: GlideSlideProps) => <div className='glide__slide p-2 mb-3'>{children}</div>;

export default GlideItem;
