import React from 'react';

class PublishResult extends React.Component {

    render() {
        return <div>
            Result: <a href={"http://localhost:8080/" + this.props.short}>{this.props.short}</a>
        </div>
    }

}

export default PublishResult;