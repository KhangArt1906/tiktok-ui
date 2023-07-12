import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f065c5db72bb1d7f8938979f32b73fec~c5_100x100.jpeg?x-expires=1689314400&x-signature=C3XDj56XI9ER26vZozc4PxHIGbc%3D"
        alt="Hoa Vinh"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Phuoc Duy Khang</span>
          <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
        </h4>
        <span className={cx("username")}>nguyenphuocduykhang</span>
      </div>
    </div>
  );
}

export default AccountItem;
