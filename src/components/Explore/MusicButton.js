import React from "react";
import classNames from "classnames/bind";
import styles from "./Explore.module.scss";
import Button from "../Button";
import Image from "~/components/Image";
import { MusicIcon } from "../Icons";

const cx = classNames.bind(styles);

function MusicButton({ song }) {
  return (
    <>
      <Button className={cx("music-btn")}>
        {song.icon ? <MusicIcon className={cx("music-icon")} /> : "#"}
        {song.title}
      </Button>
    </>
  );
}

export default MusicButton;
