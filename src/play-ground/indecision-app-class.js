class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }
    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    }
    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    handleAddOption(option) {
        if(!option){
            return 'Please enter a valid option to add item';
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        else {
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }
    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of computer';
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action 
                handlePick = {this.handlePick}
                hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div> 
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}


class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
                What should I do?
                </button>
            </div>
        );
    }
}


class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
                
            </div>
        );
    }
}


class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error:undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error
            };
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

const User = ({name, age}) => {
    return (
        <div>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
        </div>
    );
};

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));