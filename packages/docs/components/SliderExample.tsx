import { Slider } from "@exponentialeducation/slider/src";

const SliderExample = () => {
  return (
    <div className="py-4">
      <Slider options={{
        slidesPerView: 2,
        spacing: 20,
      }} dots>
        <Slider.Item className="flex items-center justify-center font-bold text-2xl text-white bg-primary-500 rounded w-full h-32 md:h-44">1</Slider.Item>
        <Slider.Item className="flex items-center justify-center font-bold text-2xl text-white bg-surface-500 rounded w-full h-32 md:h-44">2</Slider.Item>
        <Slider.Item className="flex items-center justify-center font-bold text-2xl text-white bg-warning-500 rounded w-full h-32 md:h-44">3</Slider.Item>
        <Slider.Item className="flex items-center justify-center font-bold text-2xl text-white bg-error-500 rounded w-full h-32 md:h-44">4</Slider.Item>
        <Slider.Item className="flex items-center justify-center font-bold text-2xl text-white bg-info-500 rounded w-full h-32 md:h-44">5</Slider.Item>
      </Slider>
    </div>
  );
}

export default SliderExample;
