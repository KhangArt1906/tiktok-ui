import PropsTypes from "prop-types";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Footer({ children }) {
  return <div className={cx("wrapper")}>{children}</div>;
}

Footer.propTypes = {
  children: PropsTypes.node.isRequired,
};

export default Footer;
