const menuData = {
  title: "Main Menu",
  link: "/",
  children: [
    {
      title: "About",
      link: "/about",
      children: [{ title: "Team", link: "/about/team" }],
    },
    { title: "Contact", link: "/contact" },
    { title: "Profile", link: "/profile" },
    { title: "Messages", link: "/messages" },
    {
      title: "Settings",
      link: "/settings",
      children: [
        { title: "Account", link: "/settings/account" },
        { title: "Profile", link: "/settings/profile" },
        { title: "Security & Privacy", link: "/settings/security" },
        { title: "Password", link: "/settings/password" },
        { title: "Notifications", link: "/settings/notifications" },
      ],
    },
    { title: "Help", link: "/help" },
  ],
};

export default menuData;
