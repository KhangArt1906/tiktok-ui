// SuggestedAccounts.js
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SuggestedAccounts({
  label,
  isSeeAll = false,
  data = [],
  onViewChange,
}) {
  const visibleData = isSeeAll ? data : data.slice(0, 5);

  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>

      {visibleData.map((account) => (
        <AccountItem key={account.id} data={account} />
      ))}

      <p className={cx("more-btn")} onClick={onViewChange}>
        {isSeeAll ? "See less" : "See all"}
      </p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
  isSeeAll: PropTypes.bool,
  onViewChange: PropTypes.func.isRequired,
};

export default SuggestedAccounts;
