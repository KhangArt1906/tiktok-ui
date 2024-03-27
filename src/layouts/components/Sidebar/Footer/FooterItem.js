import classNames from "classnames/bind";
import PropsTypes from "prop-types";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function FooterItem({ title, to }) {
  return (
    <div>
      <ul className={cx("footer-list")}>
        <li className={cx("footer-item")}>
          <Link to={to} className={cx("footer-item_link")}>
            {title}
          </Link>
        </li>
      </ul>
    </div>
  );
}

FooterItem.propsTypes = {
  title: PropsTypes.string.isRequired,
  to: PropsTypes.string.isRequired,
};

export default FooterItem;
