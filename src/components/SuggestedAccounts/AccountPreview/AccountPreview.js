import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button/Button";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/bd967834ae84b3170828cd433fa5a414~c5_100x100.jpeg?x-expires=1689908400&x-signature=gRStPTPWl83vmzthTjgrNeqnK4Y%3D"
          alt=""
        />
        <div>
          <Button className={cx("follow-btn")} primary>
            Follow
          </Button>
        </div>
      </div>

      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong> justinbieber94</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
        </p>
        <p className={cx("name")}>Justin Bieber</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>19.6M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>19.6M </strong>
          <span className={cx("label")}>Like</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
