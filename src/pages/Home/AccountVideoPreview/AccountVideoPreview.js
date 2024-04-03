import PropsTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AccountVideoPreview.scss";
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountVideoPreview({ data }) {
  return (
    <div className={cx("video_wrapper")}>
      <div className={cx("video_header")}>
        <img
          className={cx("video_avatar")}
          src={data.user.avatar}
          alt={data.user.nickname}
        />
        <div>
          <Button className={cx("follow-btn")} primary>
            Follow
          </Button>
        </div>
      </div>

      <div className={cx("video_body")}>
        <p className={cx("video_nickname")}>
          <strong>{data.user.nickname}</strong>

          {data.user.tick && (
            <FontAwesomeIcon
              className={cx("video_check")}
              icon={faCircleCheck}
            />
          )}
        </p>

        <p
          className={cx("video_name")}
        >{`${data.user.first_name} ${data.user.last_name}`}</p>

        <p className={cx("video_analytics")}>
          <strong className={cx("video_value")}>
            {data.user.followings_count}
          </strong>

          <span className={cx("video_label")}> Followers</span>

          <strong className={cx("video_value")}>{data.user.likes_count}</strong>
          <span className={cx("video_label")}> Like</span>
        </p>
      </div>
    </div>
  );
}

AccountVideoPreview.propsTypes = {
  data: PropsTypes.object.isRequired,
};

export default AccountVideoPreview;
