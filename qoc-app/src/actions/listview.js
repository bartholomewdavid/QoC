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

// Get the app details!
const getAppDetails = appId => {
  return {
    type: 'GET_APP_DETAILS',
    appId: appId
  };
};

// Successfully retrieved the app details
const receivedAppDetails = appDetails => {
  return {
    type: 'RECEIVED_APP_DETAILS',
    appDetails: appDetails
  };
};

function fetchAppDetails(appId) {
  return (dispatch, state) => {
    dispatch(getAppDetails())

    fetch(`http://localhost:4200/details/${appId}`)
      .then(response => {
        response.json().then(app => {
          return dispatch(receivedAppDetails(app));
        });
      });
  };
}

export {
  fetchAppList,
  fetchAppDetails
};
