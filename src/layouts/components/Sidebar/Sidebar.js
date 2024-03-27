// Sidebar.js
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { useState, useEffect } from "react";
import Menu, { MenuItem } from "./Menu";
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from "~/components/Icons";
import config from "~/config";
import SuggestedAccounts from "~/components/SuggestedAccounts";
import * as userService from "~/services/userService";
import Explore from "~/components/Explore/Explore";
import { songs } from "~/services/songServices";
import FooterContainer from "./Footer/FooterContainer";

const cx = classNames.bind(styles);
const PER_PAGE = 5;

function Sidebar() {
  const [isSeeAll, setIsSeeAll] = useState(false);
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  useEffect(() => {
    fetchSuggestedUsers();
  }, [isSeeAll]);

  const fetchSuggestedUsers = () => {
    const page = isSeeAll ? 2 : 1;
    userService
      .getSuggested({ page, perPage: PER_PAGE })
      .then((data) => {
        if (page === 1) {
          setSuggestedUsers(data);
        } else {
          setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleViewChange = () => {
    setIsSeeAll((prevState) => !prevState);
  };

  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
      <SuggestedAccounts
        label="Suggested accounts"
        data={suggestedUsers}
        isSeeAll={isSeeAll}
        onViewChange={handleViewChange}
      />

      <Explore label="Explore songs" data={songs} />

      <FooterContainer />
    </aside>
  );
}

export default Sidebar;
