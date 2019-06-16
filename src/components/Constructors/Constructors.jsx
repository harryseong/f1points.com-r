import React, { Component } from "react";
import { connect } from "react-redux";
import "./Constructors.scss";
import Grid from "@material-ui/core/Grid";

const mapStateToProps = state => {
  return { constructors: state.constructors.constructors };
};

class ConnectedConstructors extends Component {
  render() {
    const constructors = this.props.constructors;

    return (
      <div>
        <h1>Constructors</h1>

        <div className="root">
          <Grid
            container
            direction="row"
            justify="start"
            alignItems="center"
            spacing={1}
          >
            {constructors.map(constructor => (
              <Grid item xs={12} sm={6} md={4} key={constructor.constructorId}>
                <div className="constructor-card">
                  <img
                    className="constructor-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvg0JBkqIduSMKCqEHjI-c2-wXggBXE-Rs6MGrYBB0bwoAMXLe"
                    alt=""
                  />
                  <div className="constructor-details">
                    <div className="constructor-name">{constructor.name}</div>
                    <div className="constructor-nationality">
                      {constructor.nationality}
                    </div>
                    <div className="constructor-more-info-link">
                      <a href={constructor.url}>More constructor info</a>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

const Constructors = connect(mapStateToProps)(ConnectedConstructors);

export default Constructors;
