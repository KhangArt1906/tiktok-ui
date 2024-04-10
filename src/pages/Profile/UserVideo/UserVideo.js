import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./UserVideo.module.scss";
import { getUser } from "~/services/userService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const UserVideos = ({ nickname }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    fetchUserVideos();
  }, [nickname]);

  const fetchUserVideos = async () => {
    try {
      const userData = await getUser({ nickname });
      setVideos(userData.videos);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  //Video Play/Pause
  const handleMouseOver = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch((error) => console.log(error));
    }
  };

  const handleMouseOut = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };

  if (loading) {
    return <div>Loading user videos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={cx("wrapper")}>
      {videos.length > 0 ? (
        <div className={cx("video_profile_lists")}>
          {videos.map((video, index) => (
            <Link key={index}>
              <div
                className={cx("video_profile_container")}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={() => handleMouseOut(index)}
              >
                <div className={cx("video_profile_item")}>
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    muted
                    className={cx("video_profile")}
                  >
                    <source src={video.file_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p>
                    <span className={cx("video_profile_icon")}>
                      <FontAwesomeIcon icon={faPlay} color="white" /> 0
                    </span>
                  </p>
                </div>
                <p>{video.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>This user has no videos yet.</div>
      )}
    </div>
  );
};

export default UserVideos;
