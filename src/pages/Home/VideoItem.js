import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import styles from "./Home.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShare } from "@fortawesome/free-solid-svg-icons"; // Thêm các biểu tượng cần thiết
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function VideoItem({ data }) {
  return (
    <div className={cx("video-item")}>
      {/* Sửa từ data.avatar thành data.user.avatar và data.nickname thành data.user.nickname */}
      {/* Video Information */}
      <div className={cx("video-info")}>
        <div className={cx("video-info_user")}>
          <div className={cx("user-avatar")}>
            <Image
              className={cx("avatar")}
              src={data.user.avatar}
              alt={data.user.nickname}
            />
          </div>
          <div className={cx("user-info")}>
            <p className={cx("nickname")}>
              <strong>{data.user.nickname}</strong>
              {/* Sửa từ data.nickname thành data.user.nickname */}
              <span
                className={cx("user-name")}
              >{`${data.user.last_name} ${data.user.first_name}`}</span>{" "}
              {/* Sửa từ data.first_name thành data.user.first_name và data.last_name thành data.user.last_name */}
            </p>
            <p className={cx("bio")}>{data.user.bio}</p>
          </div>
        </div>
        <Button className={cx("btn-follow")}>Follow</Button>
      </div>
      {/* Video Clip */}
      <div className={cx("video-wrapper")}>
        <div className={cx("video_item")}>
          <video
            className={cx("video-user")}
            width={476}
            height={576}
            loop
            src={data.file_url}
            alt={data.description}
          />
        </div>

        {/* Function Video */}
        <div className={cx("video_function")}>
          <div className={cx("like_function")}>
            <button small className={cx("btn-function")}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <span>{data.likes_count}</span>
          </div>

          <div className={cx("comment_function")}>
            <button className={cx("btn-function")}>
              <FontAwesomeIcon icon={faComment} />
            </button>
            <span>{data.comments_count}</span>
          </div>

          <div className={cx("share_function")}>
            <button className={cx("btn-function")}>
              <FontAwesomeIcon icon={faShare} />
            </button>
            <span>{data.shares_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

VideoItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoItem;
