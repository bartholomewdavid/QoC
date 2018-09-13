
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
  fetchAppDetails
};