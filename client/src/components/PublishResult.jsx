import React from 'react';
import { Paper, Box, Link, Typography, Grid, Button } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import config from '../config';
import './PublishResult.css';

class PublishResult extends React.Component {

    constructor(props) {
        super(props);

        this.onCopyClicked = this.onCopyClicked.bind(this);
    }

    onCopyClicked() {
        navigator.clipboard.writeText(`${config.API_URL}/${this.props.short}`)
    }

    render() {
        return <Paper elevation={2}>
            <Box m={2} mt={3} p={0}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={5}>
                        <Typography>{this.props.dest}</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography style={{textAlign: "right"}}>
                            <Link href={`${config.API_URL}/${this.props.short}`}>{`${config.API_URL}/${this.props.short}`}</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className="fullSize" onClick={this.onCopyClicked} variant="outlined" color="primary" size="large" endIcon={<FileCopyIcon />}>Copy</Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    }

}

export default PublishResult;