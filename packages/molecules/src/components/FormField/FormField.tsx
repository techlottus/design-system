import cn from "classnames";
import { ElementType, FormFieldType } from "../Types/FormField.types";


const FormField: FormFieldType  = (props: FormFieldType) => {
  const {
    className,
    children
  } = props

  return <div className={ cn('flex-col',className, ) }>
    {children}
  </div>
}

const TopLeft = ({children, className}: ElementType) => {
  return <div className={cn('mb-1 gap-1', { className : !!className })}>{ children }</div>
}
FormField.TopLeft = TopLeft
const TopRight = ({children, className}: ElementType) => {
  return <div className={cn('mb-1 gap-1', { className : !!className })}>{ children }</div>
}
FormField.TopRight = TopRight
const BottomLeft = ({children, className}: ElementType) => {
  return <div className={cn('mt-1 gap-1', { className : !!className })}>{ children }</div>
}
FormField.BottomLeft = BottomLeft
const BottomRight = ({children, className}: ElementType) => {
  return <div className={cn('mt-1 gap-1', { className : !!className })}>{ children }</div>
}
FormField.TopLeft = TopLeft
FormField.TopRight = TopRight
FormField.BottomLeft = BottomLeft
FormField.BottomRight = BottomRight






export default FormField;