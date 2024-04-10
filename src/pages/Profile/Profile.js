// Trong trang Profile.js
import React, { useState, useEffect } from "react";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import { getUser } from "~/services/userService";
import { Link, NavLink, useParams } from "react-router-dom";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faLock, faShare } from "@fortawesome/free-solid-svg-icons";
import UserVideo from "./UserVideo";

const cx = classNames.bind(styles);

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { nickname } = useParams(); // Lấy nickname từ URL
  const [activeTab, setActiveTab] = useState("videos");

  useEffect(() => {
    fetchUserPage();
  }, [nickname]); // Thêm nickname vào dependency array để lắng nghe thay đổi của URL

  const fetchUserPage = async () => {
    try {
      const userData = await getUser({ nickname });
      setUserData(userData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "videos":
        return <UserVideo nickname={userData.nickname} />; // Pass nickname to UserVideos component
      case "liked":
        if (userData.nickname) {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                marginTop: "7rem",
                fontSize: "2rem",
              }}
            >
              <FontAwesomeIcon
                style={{
                  fontSize: "8rem",
                  color: "#b0b4b4",
                  marginBottom: "0.8rem",
                }}
                icon={faLock}
              />
              <p style={{ fontWeight: "bold", fontSize: "2.4rem" }}>
                This user's liked videos are private
              </p>
              <p style={{ fontSize: "1.6rem", marginTop: "2px" }}>
                Videos liked by {userData.nickname} are currently hidden
              </p>
            </div>
          );
        } else {
          return <div>Liked Content</div>;
        }
      default:
        return null;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={cx("wrapper")}>
      {userData && (
        <div className={cx("profile_container")}>
          <div className={cx("profile_user")}>
            <div className={cx("profile_content")}>
              <Image
                className={cx("profile_avatar")}
                src={userData.avatar}
                alt={userData.full_name}
              />
              <div className={cx("profile_info")}>
                <p className={cx("profile_nickname")}>{userData.nickname}</p>
                <Button className={cx("profile_btnFollow")} primary>
                  Follow
                </Button>
              </div>
            </div>

            <div className={cx("profile_functions")}>
              <FontAwesomeIcon icon={faShare} />
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>

          <p className={cx("profile_bio")}>{userData.bio}</p>

          <div className={cx("profile_statistics")}>
            <p>
              Followers
              <span style={{ marginLeft: "4px" }}>
                <b>{userData.followers_count}</b>
              </span>
            </p>
            <p>
              Followings
              <span style={{ marginLeft: "4px" }}>
                <b>{userData.followings_count}</b>
              </span>
            </p>

            <p>
              Likes
              <span style={{ marginLeft: "4px" }}>
                <b> {userData.likes_count}</b>
              </span>
            </p>
          </div>

          <div className={cx("profile_link")}>
            <NavLink className={cx("profile_nav")}>
              <Link
                className={cx("profile_nav_link", {
                  active: activeTab === "videos",
                })}
                onClick={() => setActiveTab("videos")}
              >
                Videos
              </Link>
              <Link
                className={cx("profile_nav_link", {
                  active: activeTab === "liked",
                })}
                onClick={() => setActiveTab("liked")}
              >
                <FontAwesomeIcon style={{ marginRight: "8px" }} icon={faLock} />
                Liked
              </Link>
            </NavLink>
          </div>
        </div>
      )}
      {renderContent()}
    </div>
  );
}

export default Profile;
