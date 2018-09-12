import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAppDetails } from '../actions';

import { FormatDate } from '../utils';

class DetailView extends Component {
  componentDidMount() {
    const appId = this.props.match.params.appId;

    this.props.dispatch(fetchAppDetails(appId));
  }

  render() {
    const app = this.props.appDetails;

    if (!app) {
      return (<h2>Loading...</h2>);
    }

    return (
      <div className="detail-view">
        <h2>Detail View</h2>

        <p>
          <span className="detail-key">Title</span>
          <span className="detail-value">{app['title']['label']}</span>
        </p>
        <p>
          <span className="detail-key">App icon</span>
          <span className="detail-value"><img src={app['im:image'][2]['label']} alt={`Thumbnail for ${app['title']['label']}`}/></span>
        </p>
        <p>
          <span className="detail-key">Release date formatted like “MM/DD/YYYY”</span>
          <span className="detail-value">{FormatDate(app['im:releaseDate']['label'])}</span>
        </p>
        <p>
          <span className="detail-key">Summary</span>
          <span className="detail-value">{app['summary']['label']}</span>
        </p>
        <p>
          <span className="detail-key">Application price with currency</span>
          <span className="detail-value">{app['im:price']['attributes']['amount']} {app['im:price']['attributes']['currency']}</span>
        </p>
        <p>
          <span className="detail-key">Category</span>
          <span className="detail-value">{app['category']['attributes']['label']}</span>
        </p>
        <p>
          <span className="detail-key">Link to App Store</span>
          <span className="detail-value"><a href={app['link']['attributes']['href']} rel={app['link']['attributes']['rel']}>App Store</a></span>
        </p>
        <p>
          <span className="detail-key">App publisher name and link</span>
          <span className="detail-value">{app['rights']['label']}</span>
        </p>
      </div>
    );
  }
}

DetailView.propTypes = {
  store: PropTypes.object,
  appDetails: PropTypes.object
};

function mapStateToProps(state) {
  const { appDetails } = state.listview;

  return {
    appDetails
  };
}

export default connect(mapStateToProps)(DetailView);