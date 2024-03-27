import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import PropTypes from "prop-types";
import VideoItem from "./VideoItem";
import * as videoService from "~/services/videoService";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Home({ type = "for-you" }) {
  const [page, setPage] = useState(1);
  const [videoUsers, setVideoUsers] = useState([]);

  useEffect(() => {
    fetchVideoUsers();
  }, [type, page]);

  const fetchVideoUsers = () => {
    videoService
      .getVideo({ type, page })
      .then((data) => {
        if (page === 1) {
          setVideoUsers(data);
        } else {
          setVideoUsers((prevVideo) => [...prevVideo, ...data]);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className={cx("wrapper")}>
      {videoUsers &&
        videoUsers.map((videoData) => (
          <VideoItem key={videoData.id} data={videoData} />
        ))}

      <button onClick={() => setPage((prevPage) => prevPage + 1)}>
        Load More
      </button>
    </div>
  );
}

Home.propTypes = {
  type: PropTypes.oneOf(["for-you", "following"]).isRequired,
};

export default Home;
