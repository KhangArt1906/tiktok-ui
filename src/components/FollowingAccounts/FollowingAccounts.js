import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./FollowingAccounts.module.scss";
import AccountItem from "../AccountItem";

const cx = classNames.bind(styles);

function FollowingAccounts({ label, data = [] }) {
  const visibleData = data.slice(0, 5);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>

      {visibleData &&
        visibleData.map((account) => (
          <AccountItem key={account.id} data={account} />
        ))}
    </div>
  );
}

FollowingAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default FollowingAccounts;
