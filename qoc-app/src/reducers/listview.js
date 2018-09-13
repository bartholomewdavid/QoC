export default function listview(
  state = {
    apps: []
  },
  action
) {
  switch(action.type) {
    case 'GET_APP_LIST':
      return Object.assign({}, state, {});
    case 'RECEIVED_APP_LIST':
      return Object.assign({}, state, { apps: action.apps });
    default:
      return state;
  }
}