import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAppList } from '../actions';

import { Link } from 'react-router-dom';

class ListView extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAppList());
  }

  render() {
    let rows = [];
    if (this.props.apps) {
      rows = this.props.apps.map(data => {
        return (
          <div key={data['id']['attributes']['im:id']}>
            <Link to={`/detail/${data['id']['attributes']['im:id']}`}>
              <img src={data['im:image'][2]['label']} alt=""/>
              <strong>{data['im:price']['label']}</strong>
              <strong>{data['im:name']['label']}</strong>
            </Link>
          </div>
        );
      })
    }

    return (
      <div className="list-view">
        <h2>List View</h2>

        {rows}
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