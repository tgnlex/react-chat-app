import type { CSSProperties, PropsWithChildren } from "react";
// CSX
const componentStyle: CSSProperties = {
    display: 'flex', 
    flexDirection: 'column'
}
// JSX
const Col = (props: PropsWithChildren) => {
  return (
    <div style={componentStyle}>
      {props.children}
    </div>
  )  
}
export {Col};