import React from 'react';

//import './App.css';


class ClickCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { counter: 0 };

        /*document.body.onkeyup = function (e) {
            if (e.keyCode == 32) {
                this.registerClick();
            }
        }*/

    }

    componentDidMount() {
        //you must to add  event listener  for  dom events
        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {

    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter' || event.key === ' '){
            this.registerClick();
        }
        if(event.key === 'Delete'|| event.key ===  'Backspace'){
            this.resetCounter();
        }
      }

    registerClick() {
        this.setState({counter: this.state.counter+1});
        console.log(this.state.counter);
    }
    
     resetCounter() {
        this.setState({counter: 0});
    }
    



    render() {
        
        return (
            <div>
                <h1>Simple Click Counter</h1>
                <h2>{this.state.counter}</h2>
            </div>
            
        );
    }
}







export default ClickCounter;
