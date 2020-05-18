import React from 'react';
import axios from 'axios';

class Subjects extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            text: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const titleOfSubject = event.target.name
        const textInput = event.target.value
        this.setState({
            title: titleOfSubject,
            text: textInput
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const titleOfSubject = this.state.title;
        const textInput = this.state.text;
        const subjectSubmit = {
            title: titleOfSubject,
            text: textInput
        };

        axios({
            url: '/test/save',
            method: 'POST',
            data: subjectSubmit
        })
        .then(() => {
            console.log("Data has been sent to the server!")
            this.resetUserInput()})
        .catch(() => console.log("Internal server error!"));
    }

    resetUserInput = () => {
        this.setState({
            title: '',
            text: ''
        })
    }

    render(){
        console.log("State: ", this.state)
        return(
            <div className="whole">
                <h1 id = "subject-name" 
                value = {this.state.title}
                name = {this.props.name}
                >{this.props.name}</h1>
                <textarea 
                value = {this.state.text}
                name = {this.props.name}
                onChange = {this.handleChange} />
                <form onSubmit = {this.handleSubmit}>
                    <input
                    type = "submit"
                    value = "Send"
                    className="button" 
                    />
                </form>
            </div>
        )
    }
}




export default Subjects