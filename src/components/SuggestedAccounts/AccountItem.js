import PropTypes from "prop-types";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("account-item")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/bd967834ae84b3170828cd433fa5a414~c5_100x100.jpeg?x-expires=1689908400&x-signature=gRStPTPWl83vmzthTjgrNeqnK4Y%3D"
        alt=""
      />

      <div className={cx("item-info")}>
        <p className={cx("nickname")}>
          <strong> justinbieber94</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
        </p>
        <p className={cx("name")}>Justin Bieber</p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
