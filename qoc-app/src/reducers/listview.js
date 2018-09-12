export default function listview(
  state = {
    apps: [],
    appDetails: null
  },
  action
) {
  switch(action.type) {
    case 'GET_APP_LIST':
      return Object.assign({}, state, {});
    case 'RECEIVED_APP_LIST':
      return Object.assign({}, state, { apps: action.apps });
    case 'GET_APP_DETAILS':
      return Object.assign({}, state, { appDetails: null });
    case 'RECEIVED_APP_DETAILS':
      return Object.assign({}, state, { appDetails: action.appDetails });
    default:
      return state;
  }
}