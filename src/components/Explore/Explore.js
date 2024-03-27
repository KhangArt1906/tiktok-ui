import classNames from "classnames/bind";
import styles from "./Explore.module.scss";
import MusicButton from "./MusicButton";
import { songs } from "~/services/songServices";

const cx = classNames.bind(styles);

function Explore({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>

      <div className="sidebar-music">
        {songs.map((song) => (
          <MusicButton key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Explore;
