import classNames from "classnames/bind";
import styles from "./Live.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Live() {
  return (
    <div className={cx("live_wrapper")}>
      <div className={cx("live_container")}>
        <div className={cx("live_information")}>
          <h2 className={cx("live_heading")}>No LIVE videos for you yet</h2>
          <p className={cx("live_description")}>
            Go back to explore more videos
          </p>
          <Button className={cx("btnLive")}>Go back</Button>
        </div>
      </div>
    </div>
  );
}

export default Live;
