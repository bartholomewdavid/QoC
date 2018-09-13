// Get the list!
const getAppList = () => {
  return {
    type: 'GET_APP_LIST'
  }
};

// Successfully retrieved List
const receivedAppList = payload => {
  return {
    type: 'RECEIVED_APP_LIST',
    apps: payload
  };
}

function fetchAppList() {
    return dispatch => {
      dispatch(getAppList());

      fetch(`http://localhost:4200/list`)
      .then(response => {
        response.json().then(apps => {
          return dispatch(receivedAppList(apps));
        });
      });
    };
}

export {
  fetchAppList
};
