import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAppList } from '../actions';

import { Link } from 'react-router-dom';
import { Loading } from './loading';

class ListView extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAppList());
  }

  render() {
    let rows = [];

    if (this.props.apps) {
      rows = this.props.apps.map(data => {
        return (
          <div className="list-view-row" key={data['id']['attributes']['im:id']}>
            <Link className="list-view-row__link" to={`/detail/${data['id']['attributes']['im:id']}`}>
              <img className="list-view-row__thumb" src={data['im:image'][2]['label']} alt=""/>
              <strong className="list-view-row__label">{data['im:name']['label']}</strong>
            </Link>
          </div>
        );
      })
    }

    const content = (rows.length) ? rows : (<Loading/>);

    return (
      <div className="list-view">
        <h1 className="title">Top Paid Apps</h1>

        {content}
      </div>
    );
  };
}

ListView.propTypes = {
  store: PropTypes.object,
  apps: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
  const { apps } = state.listview;

  return {
    apps,
  }
}

export default connect(mapStateToProps)(ListView);