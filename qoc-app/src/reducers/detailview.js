export default function listview(
  state = {
    appDetails: null
  },
  action
) {
  switch(action.type) {
    case 'GET_APP_DETAILS':
      return Object.assign({}, state, { appDetails: null });
    case 'RECEIVED_APP_DETAILS':
      return Object.assign({}, state, { appDetails: action.appDetails });
    default:
      return state;
  }
}