import { render, screen, waitFor } from "@testing-library/react";
import { Slider } from ".";

describe("<Slider />", () => {
  it("render a simple <Slider />", async () => {
    render(
      <Slider />
    );

    await waitFor(() => {
      expect(screen.getByRole('slider')).toHaveClass('keen-slider');
    });
  })

  it("render a simple <Slider.Item /> into a <Slider />", async () => {
    render(
      <Slider>
        <Slider.Item />
      </Slider>
    );

    await waitFor(() => {
      expect(screen.getAllByRole('slider__item').length).toBe(1);
      expect(screen.getByRole('slider__item')).toHaveClass('keen-slider__slide');
    });
  });

  it("will be render a custom element inside of a <Slider.Item />", async () => {
    render(
      <Slider>
        <Slider.Item>
          <div role="card" className="bg-white shadow">
            <span role="title" className="text-lg">Hello World</span>
            <p role="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum rerum delectus doloremque quidem deleniti, consequatur nihil? Eveniet laudantium nihil labore. Aliquid corporis placeat nobis mollitia amet ducimus enim eligendi?</p>
          </div>
        </Slider.Item>
      </Slider>
    );

    await waitFor(() => {
      expect(screen.getByRole('title')).toHaveTextContent('Hello World');
      expect(screen.getByRole('paragraph')).toBeInTheDocument();
    });
  });
});