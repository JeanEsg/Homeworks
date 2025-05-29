import Home from "../pages/Home";
import About from "../pages/About";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Messages from "../pages/Messages";
import Settings from "../pages/Settings";
import Help from "../pages/Help";

import Account from "../pages/Account";
import ProfileSettings from "../pages/ProfileSettings";
import SecurityPrivacy from "../pages/SecurityPrivacy";
import Password from "../pages/Password";
import Notifications from "../pages/Notifications";

const routeMap = {
  "/": Home,
  "/about": About,
  "/about/team": Team,
  "/contact": Contact,
  "/profile": Profile,
  "/messages": Messages,
  "/settings": Settings,
  "/settings/account": Account,
  "/settings/profile": ProfileSettings,
  "/settings/security": SecurityPrivacy,
  "/settings/password": Password,
  "/settings/notifications": Notifications,
  "/help": Help,
};

export default routeMap;
