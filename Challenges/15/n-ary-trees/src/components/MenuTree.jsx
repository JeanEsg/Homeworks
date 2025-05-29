import Home from "../pages/Home";
import About from "../pages/About";
import Team from "../pages/Team";
import Messages from "../pages/Messages";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Account from "../pages/Account";
import ProfileSettings from "../pages/ProfileSettings";
import SecurityPrivacy from "../pages/SecurityPrivacy";
import Password from "../pages/Password";
import Notifications from "../pages/Notifications";
import Help from "../pages/Help";

const menuTree = {
    valor: { title: "Main Menu", link: "/", component: Home },
    hijos: [
        {
            valor: { title: "About", link: "/about", component: About },
            hijos: [
                {
                    valor: { title: "Team", link: "/about/team", component: Team },
                    hijos: [],
                },
            ],
        },
        { valor: { title: "Contact", link: "/contact", component: Contact }, hijos: [] },
        { valor: { title: "Profile", link: "/profile", component: Profile }, hijos: [] },
        { valor: { title: "Messages", link: "/messages", component: Messages }, hijos: [] },
        {
            valor: { title: "Settings", link: "/settings", component: Settings },
            hijos: [
                { valor: { title: "Account", link: "/settings/account", component: Account }, hijos: [] },
                { valor: { title: "Profile", link: "/settings/profile", component: ProfileSettings }, hijos: [] },
                { valor: { title: "Security & Privacy", link: "/settings/security", component: SecurityPrivacy }, hijos: [] },
                { valor: { title: "Password", link: "/settings/password", component: Password }, hijos: [] },
                { valor: { title: "Notifications", link: "/settings/notifications", component: Notifications }, hijos: [] },
            ],
        },
        { valor: { title: "Help", link: "/help", component: Help }, hijos: [] },
    ],
};

export default menuTree;
