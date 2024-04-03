import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import styles from "./Home.module.scss";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShare,
  faPlay,
  faVolumeMute,
  faPause,
  faVolumeUp,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons"; // Thêm các biểu tượng cần thiết
import Button from "~/components/Button";
import { useEffect, useRef, useState } from "react";
import AccountVideoPreview from "./AccountVideoPreview";

const cx = classNames.bind(styles);

function VideoItem({ data }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const videos = document.querySelectorAll(".video-user");
      videos.forEach((video) => {
        const rect = video.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isVisible) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    setIsPlaying(!video.paused); // Cập nhật trạng thái của video trước khi thay đổi trạng thái của icon
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  //Account Preview
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountVideoPreview data={data} />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div className={cx("video-item")}>
      <div className={cx("video-info")}>
        <Tippy
          interactive
          offset={[-20, 0]}
          placement="bottom"
          delay={[800, 0]}
          render={renderPreview}
        >
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
                {data.tick && (
                  <FontAwesomeIcon
                    className={cx("check")}
                    icon={faCircleCheck}
                  />
                )}
                <span
                  className={cx("user-name")}
                >{`${data.user.last_name} ${data.user.first_name}`}</span>
              </p>
              <p className={cx("bio")}>{data.user.bio}</p>
            </div>
          </div>
        </Tippy>
        <Button
          primary
          rounded
          outline
          text="Follow"
          className={cx("btn-follow")}
        >
          Follow
        </Button>
      </div>
      <div className={cx("video-wrapper")}>
        <div className={cx("video_item")}>
          <video
            className={cx("video-user")}
            id={cx("videoPlayer")}
            autoPlay
            loop
            muted={isMuted}
            ref={videoRef}
          >
            <source
              src={data.file_url}
              alt={data.description}
              type={data.meta.mine_type}
            />
          </video>
          <div className={cx("control-buttons")}>
            <button onClick={togglePlayPause} className={cx("control-btnPlay")}>
              <FontAwesomeIcon icon={isPlaying ? faPlay : faPause} />
            </button>
            <button onClick={toggleMute} className={cx("control-btnMute")}>
              <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
            </button>
          </div>
        </div>
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
