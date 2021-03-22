import React from 'react';
import "./collapseStyle.css";


class Collapse extends React.Component {
    constructor() {
        super();

        this.state = {
            visible: false
        }
        this.showMore = this.showMore.bind(this)
    }

    showMore = () => {
        this.setState({ visible: true })
        alert("done")

    }

    render() {
        return (
            // eslint-disable-next-line
            <div><button id="colbutton" onClick={this.showMore} className="btn btn-primary" >
                Visibility Button
            </button>
                {
                    this.state.visible ? (
                        <div className="collapse" id={this.props.href}>
                            {this.props.children}
                        </div>
                    ) : null
                }
            </div>
        );
    }
}
export default Collapse