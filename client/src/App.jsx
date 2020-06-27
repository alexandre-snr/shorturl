import React from 'react';
import PublishForm from './components/PublishForm';
import PublishResult from './components/PublishResult';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.onPublishSuccess = this.onPublishSuccess.bind(this);
        this.onPublishError = this.onPublishError.bind(this);

        this.state = {
            results: []
        };
    }

    onPublishSuccess(short) {
        this.setState({
            results: [ short ].concat(this.state.results)
        });
    }

    onPublishError() {
        
    }

    render() {
        return <div>
            <h1>ShortURL - simple URL shortening service</h1>
            <PublishForm onPublishSuccess={this.onPublishSuccess} onPublishError={this.onPublishError} />
            {
                this.state.results.map((result) => {
                    return <PublishResult short={result} key={result} />
                })
            }
        </div>
    }

}

export default App;