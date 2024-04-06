//Get suggested user video list render 10 people with video which is following
import classNames from "classnames/bind";
import styles from "./Following.module.scss";
import * as userService from "~/services/userService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function FollowingAccount() {
  const [followingAccounts, setFollowingAccounts] = useState([]);

  useEffect(() => {
    const fetchVideoAccount = async () => {
      try {
        const page = 1; // Đặt page tại đây
        const perPage = 10; // Đặt perPage tại đây
        const usersData = await userService.getSuggested({ page, perPage });
        setFollowingAccounts(usersData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideoAccount();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("following_container")}>
        <div className={cx("following_wrapper")}>
          {followingAccounts.map((following) => (
            <Link
              to={`/user/${following.id}`}
              className={cx("following_video_link")}
              key={following.id}
            >
              {following && following.popular_video && (
                <video muted autoPlay loop className={cx("video_following")}>
                  <source
                    src={following.popular_video.file_url}
                    type={following.popular_video.meta.mime_type}
                    alt={following.popular_video.description}
                  />
                </video>
              )}
              <div className={cx("following_info")}>
                <img
                  className={cx("following_avatar")}
                  src={following.avatar}
                  alt={following.nick_name}
                />
                <p>
                  <span className={cx("following_name")}>
                    {following.first_name} {following.last_name}
                  </span>
                </p>
                <p className={cx("following_nickname")}>{following.nickname}</p>
                <button primary className={cx("btnFollowing")}>
                  Follow
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FollowingAccount;
