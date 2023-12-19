import React from "react";

import Aspect  from "../components/Aspect";
export default {
  title: "Technical Components/Aspect",
  component: Aspect,
  tags: ["autodocs"],
  args: {
    ratio: "2/1",
  },
};
/**Image with aspect 2/1 */
const Template = (args) => (
  <Aspect {...args}>
    <img className="top-0 left-0 w-full h-full absolute" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"/>
  </Aspect>
);

const AspectImage = Template.bind({});

export { AspectImage };