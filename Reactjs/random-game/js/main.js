class RandomGame extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfGuessing: 0,
        }
    }

    changeNumberOfGuessing = (numberOfGuessing) => {
        this.setState({numberOfGuessing});
    }

    render() {
        return (
            <div>
                <Header numberOfGuessing={this.state.numberOfGuessing}/>
                <Main changeNumberOfGuessing={this.changeNumberOfGuessing}
                      numberOfGuessing={this.state.numberOfGuessing}/>
            </div>
        )
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"header text-center jumbotron " + (this.props.numberOfGuessing >= 5 ? "bg-danger" : "")}>
                <h1>Guessing random number</h1>
                <p>We random a number, can you guess it?</p>
            </div>
        );
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: this.randomNumber(),
            valueNumber: '',
            message: ''
        }
    }

    newGame = () => {
        this.setState({
            randomNumber: this.randomNumber(),
            valueNumber: '',
            message: ''
        });
    }

    randomNumber = () => {
        return Math.ceil(Math.random() * 100);
    }

    guess = () => {
        let {randomNumber, valueNumber} = this.state;
        let {numberOfGuessing} = this.props;
        let message = '';

        if (numberOfGuessing < 5) {
            if (valueNumber <= 100 && valueNumber > 0 && valueNumber !== '') {
                if (randomNumber > valueNumber) {
                    message = "You guess smaller";
                } else if (randomNumber < valueNumber) {
                    message = "You guess largest";
                } else {
                    message = "You guess right";
                }
                this.props.changeNumberOfGuessing(numberOfGuessing + 1);
            } else {
                message = "You guess number less than or equal to 100, greater than 0 and do not input blank.";
            }
        } else {
            message = "You loser! Please start new game.";
        }

        this.setState({
            message,
            valueNumber: '',
        });
    }

    inputChange = (event) => {
        this.setState({
            valueNumber: Number(event.target.value)
        });
    }

    render() {
        return (
            <div className="main">
                <button onClick={this.newGame}>New Game</button>
                <hr/>
                <p>Number of guessed: {this.props.numberOfGuessing}</p>
                <p>Enter guessing number: </p>
                <input value={this.state.valueNumber} onChange={this.inputChange} type="number"/>
                <button onClick={this.guess} className="btn-success">Guess</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

ReactDOM.render(<RandomGame/>, document.getElementById('app'));