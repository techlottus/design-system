import cn from "classnames"
import ContainerType from "../Types/Container.types"

const Container: React.FC<ContainerType> = (props: ContainerType) => {
  const { children, classNames = "" } = props;


  return <div className={cn("max-desktop mx-auto desktop:px-6", classNames)}>
    {children}
  </div>

};

export default Container;
