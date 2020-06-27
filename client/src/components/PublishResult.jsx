import React from 'react';
import config from '../config';

class PublishResult extends React.Component {

    render() {
        return <div>
            Result: <a href={`${config.API_URL}/${this.props.short}`}>{this.props.short}</a>
        </div>
    }

}

export default PublishResult;