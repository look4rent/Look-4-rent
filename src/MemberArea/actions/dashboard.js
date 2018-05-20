//Dashboard Actions

export const dashboard = sideNavKey => ({
  type: "SIDE_NAV_DASHBOARD",
  sideNavKey
});

export const postNewAd = sideNavKey => ({
  type: "SIDE_NAV_POSTNEWAD",
  sideNavKey
});

export const myAds = sideNavKey => ({
  type: "SIDE_NAV_MYADS",
  sideNavKey
});

export const watchlist = sideNavKey => ({
  type: "SIDE_NAV_WATCHLIST",
  sideNavKey
});

export const editProfile = sideNavKey => ({
  type: "SIDE_NAV_EDITPROFILE",
  sideNavKey
});
