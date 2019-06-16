import React, { Component } from "react";
import { connect } from "react-redux";
import { checkServerIdentity } from "tls";

const mapStateToProps = state => {
    return { constructors: state.constructors.constructors };
};

class ConnectedConstructors extends Component {
    render() {
        const constructors = this.props.constructors;

        return (
            <div>
                <h1>Constructors</h1>

                {constructors.map(c => (
                    <div key={c.constructorId}>
                        <h4>{c.name}</h4>

                        <div>Nationality: {c.nationality}</div>
                        <div>
                            <a href={c.url}>Constructor Info</a>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const Constructors = connect(mapStateToProps)(ConnectedConstructors);

export default Constructors;
