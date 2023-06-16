import Aspect from "../Aspect";
import Heading from "../Heading";
import cn from "classnames";

// const defaultValues: any = {};
const colors: any = {
  color1: "bg-outstanding-100",
  color2: "bg-outstanding-200",
  color3: "bg-outstanding-300",
  color4: "bg-outstanding-400",
  color5: "bg-neutral-500",
  color6: "bg-neutral-800",
  color7: "bg-neutral-900",
};

const Rainbow = (props: any) => {
  const { items, backgroundColor } = props;
  return (
    <div className="flex w-full h-full relative ">
      <div
        className={cn("lg:w-3/4 w-full overflow-visible flex h-full absolute", {
          [colors[backgroundColor]]: true,
        })}
      ></div>
      <div className="z-10 w-full  h-full left-0 top-0 py-12 lg:space-y-6 md:space-y-12 space-y-6">
        {items.map((item: any, i: any) => (
          <section
            className="w-full flex flex-col lg:flex-row  lg:pl-[99px] pr-6 pl-6 lg:space-x-6 group"
            key={i}
          >
            <div className="lg:w-1/2 w-full flex flex-col lg:align-middle">
              <Heading
                title={item?.title}
                type="h-3"
                font="secondary"
                variant="negative"
                className="leading-[125%] pb-6"
              />
              <span className="flex items-start leading-[125%] text-neutral-100 font-principal pb-6 lg:pb-0 text-sm md:text-base lg:text-lg">
                {item?.description}
              </span>
            </div>
            <div className="lg:w-1/2 w-full">
              <Aspect ratio="2/1">
                <img
                  src={item?.imageUrl}
                  className={cn(
                    "w-full h-full object-cover object-center group-hover:translate-y-3 duration-1000 ease-in-out"
                  )}
                />
              </Aspect>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
export default Rainbow;
