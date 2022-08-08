import "./TextField.module.css";
import { forwardRef } from "react";

const TextField = forwardRef((props, ref) => {
  return (
    <input
      id={props.id}
      name={props.id}
      placeholder={props.placeholder}
      ref={ref}
      onChange={props.onChange}
      value={props.value}
    />
  );
});

export default TextField;
