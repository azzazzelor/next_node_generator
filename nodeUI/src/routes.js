import React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import {Panel} from "../src/containers/admin"

// axios.defaults.baseURL = getBaseURL();
axios.defaults.withCredentials = true;

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/panel"
        render={props => <Panel {...props} />}
      />
    </Switch>
  );
};

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
