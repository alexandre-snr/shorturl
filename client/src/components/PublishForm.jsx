import React from 'react';
import axios from 'axios';

class PublishForm extends React.Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            dest: ''
        };
    }

    onClick() {
        const { dest } = this.state;

        this.setState({
            dest: ''
        });

        axios.post('http://localhost:8080', {
            "dest": dest
        }).then((res) => {
            this.props.onPublishSuccess(res.data.short);
        }).catch((err) => {
            this.props.onPublishError(err);
        });
    }

    handleChange(e) {
        this.setState({
            dest: e.target.value
        });
    }

    render() {

        return <div>
            <label htmlFor="destInput">Destination:</label>
            <input type="text" name="destInput" id="destInput" onChange={this.handleChange} value={this.state.dest} />
            <button onClick={this.onClick}>Send</button>
        </div>

    }

}

export default PublishForm;