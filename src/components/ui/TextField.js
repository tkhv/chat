import "./TextField.module.css";
import { forwardRef } from "react";

const TextField = forwardRef((props, ref) => {
  return (
    <input
      id="handle"
      name="handle"
      placeholder={props.placeholder}
      ref={ref}
    />
  );
});

export default TextField;
