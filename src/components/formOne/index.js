import React,{ Component } from 'react';
import FormField from '../utils/formFields';
import {validate} from '../utils/validate';

class FormOne extends Component {

    state = {
        maxAge:81,
        loading: false,
        formData:{
            name:{
                element: 'input',
                value: '',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation:{
                    required:true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            lastname:{
                element: 'input',
                value: '',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your lastname'
                },
                validation:{
                    required:true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            age: {
                element: 'select',
                value: '',
                config: {
                    name: 'age_input',
                    type: 'text',
                },
                validation:{
                    required:true,
                    minNum: 20
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            message: {
                element: 'textarea',
                value: '',
                config: {
                    name: 'message_input',
                    rows: '3',
                    placeholder: 'Enter your message here ...'
                },
                validation:{
                    required:true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    generateOptions = () => {
        const ageArray = [];
        for(let i = 1; i < this.state.maxAge; i++){
            ageArray.push(i);
        }

        return ageArray.map((value, i) => {
            return (
                <option key={i} value={value}>{value}</option>
            )
        })
    }

    updateForm = (element) => {
        const newFormData = {
            ...this.state.formData
        }

        const newElement = {
            ...newFormData[element.id]
        }

        newElement.value = element.event.target.value;

        // check validation
        let validateData = validate(newElement);
        newElement.valid = validateData[0];
        newElement.validationMessage = validateData[1];

        // catch blur
        if(element.blur){
            newElement.touched = element.blur
        }


        newFormData[element.id] = newElement;


        this.setState({
            formData: newFormData
        });        
    }

    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;


        for(let key in this.state.formData){
            formIsValid = this.state.formData[key].valid && formIsValid
        }

        if(formIsValid){

            this.setState({loading: true});

            for(let key in this.state.formData){
                dataToSubmit[key] = this.state.formData[key].value;
            }

            setTimeout(() => {
                this.setState({loading: false});
                this.onSuccess();
            }, 2000)
        } else {
            alert('sorry the form is not valid')
        }
        
    }

    onSuccess = () =>{
        let formDataCopy = {
            ...this.state.formData
        }

        for(let key in this.state.formData){
            formDataCopy[key].value = '';
            formDataCopy[key].valid = false;
            formDataCopy[key].touched = false;
        }

        this.setState({formData : formDataCopy});
        alert('Thank you we will reach you back');
    }

    render(){
        return(
            <>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <FormField 
                            formData={this.state.formData.name}
                            id="name"
                            change={(element) => this.updateForm(element)}
                        />

                    </div>
                    <div className="form-group">
                        <label>Lastname</label>

                        <FormField 
                            formData={this.state.formData.lastname}
                            id="lastname"
                            change={(element) => this.updateForm(element)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age</label>

                        <FormField
                            formData={this.state.formData.age}
                            id="age"
                            change={(element) => this.updateForm(element)}
                        >
                            <option value="">Select Age</option>
                            {this.generateOptions()}
                        </FormField>
                        
                    </div>
                    
                    <div className="form-group">
                        <label>Enter your message here</label>
                        <FormField
                            formData={this.state.formData.message}
                            id="message"
                            change={(element) => this.updateForm(element)}
                        >
                        
                        </FormField>
                    </div>
                    
                    <button 
                        type="submit"
                        className="btn btn-primary"
                        onClick={(event)=>this.submitForm(event)}
                        disabled={this.state.loading}
                    >
                        Submit
                    </button>

                </form>
            </>
        )
    }
}

export default FormOne;