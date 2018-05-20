//Dashboard Reducer

const dashboardDefaultState = { sideNavKey: 1 };

export default (state = dashboardDefaultState, action) => {
  switch (action.type) {
    case "SIDE_NAV_DASHBOARD":
      return {
        ...state,
        sideNavKey: action.sideNavKey
      };
    case "SIDE_NAV_POSTNEWAD":
      return {
        ...state,
        sideNavKey: action.sideNavKey
      };
    case "SIDE_NAV_MYADS":
      return {
        ...state,
        sideNavKey: action.sideNavKey
      };
    case "SIDE_NAV_WATCHLIST":
      return {
        ...state,
        sideNavKey: action.sideNavKey
      };
    case "SIDE_NAV_EDITPROFILE":
      return {
        ...state,
        sideNavKey: action.sideNavKey
      };

    default:
      return state;
  }
};
