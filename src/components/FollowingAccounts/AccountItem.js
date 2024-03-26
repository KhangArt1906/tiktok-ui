import PropTypes from "prop-types";
import { Tippy } from "@tippyjs/react";
import styles from "./FollowingAccounts.module.scss";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Tippy interactive offset={[-20, 0]} placement="bottom" delay={[800, 0]}>
      <div className={cx("account-item")}>
        <Image
          className={cx("account-avatar")}
          src={data.avatar}
          alt={data.nickname}
        />
        <div className={cx("item-info")}>
          <p className={cx("nickname")}>
            <strong>{data.nickname}</strong>
            {data.tick && (
              <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
            )}
            {data.is_followed && (
              <Button className={cx("following-button")}>Following</Button>
            )}
          </p>
          <p className={cx("name")}>
            {`${data.first_name} ${data.last_name}`};
          </p>
        </div>
      </div>
    </Tippy>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
