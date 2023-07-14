import classNames from "classnames";
import { useState, forwardRef } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";

//Fallback when main image broke and the image we use to replace is no_image less the prioprity than fallback
//Fallback use to replace when the address main image broke down
const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(images.noImage);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
