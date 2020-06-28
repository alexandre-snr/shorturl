import React from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';
import config from '../config';
import './PublishForm.css';

class PublishForm extends React.Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);

        this.state = {
            dest: ''
        };
    }

    onClick() {
        const { dest } = this.state;

        if (dest.length <= 0)
            return;

        this.setState({
            dest: ''
        });

        axios.post(`${config.API_URL}/new`, {
            "dest": dest
        }).then((res) => {
            this.props.onPublishSuccess(res.data.short, dest);
        }).catch((err) => {
            this.props.onPublishError(err);
        });
    }

    handleChange(e) {
        this.setState({
            dest: e.target.value
        });
    }

    handleKeypress(e) {
        if (e.key === 'Enter')
            this.onClick();
    }

    render() {

        return <Grid container spacing={3}>
            <Grid item xs={12} md={10}>
                <TextField id="filled-basic" label="Destination" variant="filled" fullWidth onChange={this.handleChange} onKeyPress={this.handleKeypress} value={this.state.dest} />
            </Grid>
            <Grid item xs={12} md={2}>
                <Button className="fullSize" onClick={this.onClick} variant="outlined" color="primary" size="large" endIcon={<SendIcon />}>Shorten</Button>
            </Grid>
        </Grid>

    }

}

export default PublishForm;