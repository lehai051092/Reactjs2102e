// let h2 = React.createElement("h2", null, "Reactjs Hello World");

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: "--:--"
        }
    }

    runClock = () => {
        setInterval(() => {
            this.setState({
                timer: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                Timer: {this.state.timer}
                <br/>
                <button onClick={this.runClock}>Run</button>
            </div>
        );
    }
}

ReactDOM.render(<Clock/>, document.getElementById('app'));
