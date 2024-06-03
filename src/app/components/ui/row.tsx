import { PropsWithChildren, type CSSProperties} from "react";
// CSX 
const componentStyle: CSSProperties = {
  display: 'flex', 
  flexDirection: 'row'
};
// JSX
const Row = (props: PropsWithChildren) => {
  return (
    <div style={componentStyle}>
      {props.children}
    </div>
  )
  
}
export {Row};