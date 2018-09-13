import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAppDetails } from '../actions';

import { FormatDate, FormatCurrency, FormatSummary } from '../utils';

import { Loading } from './loading';
import { Link } from 'react-router-dom';

class DetailView extends Component {
  componentDidMount() {
    const appId = this.props.match.params.appId;

    this.props.dispatch(fetchAppDetails(appId));
  }

  render() {
    const app = this.props.appDetails;

    const content = (app) ? (
      <div className="detail-wrapper">
        <div className="detail-row">
          <span className="detail-key">Title:</span>
          <span className="detail-value">{app['title']['label']}</span>
        </div>
        <div className="detail-row">
          <span className="detail-key">App icon:</span>
          <span className="detail-value"><img src={app['im:image'][2]['label']} alt={`Thumbnail for ${app['title']['label']}`}/></span>
        </div>
        <div className="detail-row">
          <span className="detail-key">Release date formatted like “MM/DD/YYYY”:</span>
          <span className="detail-value">{FormatDate(app['im:releaseDate']['label'])}</span>
        </div>
        <div className="detail-row">
          <span className="detail-key">Summary:</span>
          {/* <span className="detail-value">{FormatSummary(app['summary']['label'])}</span> */}
          <span className="detail-value" dangerouslySetInnerHTML={FormatSummary(app['summary']['label'])}></span>
        </div>
        <div className="detail-row">
          <span className="detail-key">Application price with currency:</span>
          <span className="detail-value">{FormatCurrency(app['im:price']['attributes']['amount'])} {app['im:price']['attributes']['currency']}</span>
        </div>
        <div className="detail-row">
          <span className="detail-key">Category:</span>
          <span className="detail-value">{app['category']['attributes']['label']}</span>
        </div>
        <div className="detail-row">
          <span className="detail-key">Link to App Store:</span>
          <span className="detail-value"><a href={app['link']['attributes']['href']} rel={app['link']['attributes']['rel']}>App Store</a></span>
        </div>
        <div className="detail-row">
          <span className="detail-key">App publisher name and link:</span>
          <span className="detail-value">{app['rights']['label']}</span>
        </div>
      </div>
    ) : (<Loading/>);

    return (
      <div className="detail-view">
        <h1 className="title">Detail View</h1>

        <ul>
          <li><Link to="/">Back to List View</Link></li>
        </ul>

        {content}
      </div>
    );
  }
}

DetailView.propTypes = {
  store: PropTypes.object,
  appDetails: PropTypes.object
};

function mapStateToProps(state) {
  const { appDetails } = state.detailview;

  return {
    appDetails
  };
}

export default connect(mapStateToProps)(DetailView);