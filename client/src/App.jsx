import React from 'react';
import { Container, AppBar, Toolbar, IconButton, Typography, Box, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import PublishForm from './components/PublishForm';
import PublishResult from './components/PublishResult';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.onPublishSuccess = this.onPublishSuccess.bind(this);
        this.onPublishError = this.onPublishError.bind(this);
        this.hideError = this.hideError.bind(this);

        this.state = {
            results: [],
            errorShown: false
        };
    }

    onPublishSuccess(short, dest) {
        this.setState({
            results: [ {short: short, dest: dest} ].concat(this.state.results),
            errorShown: this.state.errorShown
        });
    }

    onPublishError() {
        this.setState({
            results: [].concat(this.state.results),
            errorShown: true
        });
    }

    hideError() {
        this.setState({
            results: [].concat(this.state.results),
            errorShown: false
        });
    }

    render() {
        return <Box mt={5}>
            <Container>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <CallMissedOutgoingIcon />
                    </IconButton>
                    <Typography variant="h6">
                        ShortURL
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box mt={2}>
                <PublishForm onPublishSuccess={this.onPublishSuccess} onPublishError={this.onPublishError} />
            </Box>
            {
                this.state.results.map((result) => {
                    return <PublishResult short={result.short} dest={result.dest} key={result} />
                })
            }
        </Container>
        <Snackbar open={this.state.errorShown} autoHideDuration={5000} onClose={this.hideError}>
            <MuiAlert severity="error" onClose={this.hideError}>
                There was an error while shortening your url.
            </MuiAlert>
        </Snackbar>
    </Box>
    }

}

export default App;