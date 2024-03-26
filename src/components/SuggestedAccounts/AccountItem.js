import PropTypes from "prop-types";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import Image from "~/components/Image";
import styles from "./SuggestedAccounts.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview data={data} />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <Tippy
      interactive
      offset={[-20, 0]}
      placement="bottom"
      delay={[800, 0]}
      render={renderPreview}
    >
      <div className={cx("account-item")}>
        <Image className={cx("avatar")} src={data.avatar} alt={data.nickname} />
        <div className={cx("item-info")}>
          <p className={cx("nickname")}>
            <strong>{data.nickname}</strong>
            {data.tick && (
              <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
            )}
          </p>
          <p className={cx("name")}>{`${data.first_name} ${data.last_name}`}</p>
        </div>
      </div>
    </Tippy>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
