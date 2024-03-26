import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button/Button";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img className={cx("avatar")} src={data.avatar} alt={data.nickname} />
        <div>
          <Button className={cx("follow-btn")} primary>
            Follow
          </Button>
        </div>
      </div>

      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>{data.nickname}</strong>
          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
          )}
        </p>
        <p className={cx("name")}>{`${data.first_name} ${data.last_name}`}</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>{data.followings_count}</strong>
          <span className={cx("label")}> Followers</span>
          <strong className={cx("value")}>{data.likes_count}</strong>
          <span className={cx("label")}> Like</span>
        </p>
      </div>
    </div>
  );
}

AccountPreview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountPreview;
