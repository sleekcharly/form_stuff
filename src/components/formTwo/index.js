import React,{ Component } from 'react';
import { Formik } from 'formik';

class FormTwo extends Component {

    state = {
        maxAge:81
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


    render(){
        return(
            <>

                <Formik 
                    initialValues={{ name: '', lastname: '', age: '', message: '' }}
                    validate={ values => {
                        let errors = {}

                        if(!values.name){
                            errors.name = 'Sorry the input is required'
                        }
                        if(!values.lastname){
                            errors.lastname = 'Sorry the input is required'
                        }

                        if(values.age){
                            if(values.age <= 21){
                                errors.age = 'I am sorry the minimum is 20';
                            }
                        } else {
                            errors.age = 'Sorry the age is required'
                        }

                        if(!values.message){
                            errors.message = 'Sorry the input is required'
                        }

                        return errors;
                    }}

                    onSubmit={ values =>{
                        ///submit to server
                        console.log(values)
                    }}
                >
                    { ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{
                                        borderColor: `${errors.name && touched.name ? 'red' : ''}`
                                    }}
                                />
                                {errors.name && touched.name ? 
                                    <div style={{color: 'red'}}>
                                        {errors.name}
                                    </div>
                                : null
                                }
                            </div>
                            <div className="form-group">
                                <label>Lastname</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="lastname"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{
                                        borderColor: `${errors.lastname && touched.lastname ? 'red' : ''}`
                                    }}
                                />
                                {errors.lastname && touched.lastname ? 
                                    <div style={{color: 'red'}}>
                                        {errors.lastname}
                                    </div>
                                : null
                                }
                            </div>
                            <div className="form-group">
                                <label>Age</label>
                                <select
                                    name="age"
                                    className="form-control"
                                    value={values.age}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                >
                                {this.generateOptions()}
                                
                                </select>
                                {errors.age && touched.age ? 
                                    <div style={{color: 'red'}}>
                                        {errors.age}
                                    </div>
                                : null
                                }
                            </div>
                            
                            <div className="form-group">
                                <label>Enter your message here</label>
                                <textarea 
                                    rows="3"
                                    placeholder="Add your message here..."
                                    className="form-control"
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></textarea>
                                {errors.message && touched.message ? 
                                    <div style={{color: 'red'}}>
                                        {errors.message}
                                    </div>
                                : null
                                }
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
                    )}
                </Formik>

            </>
        )
    }
}

export default FormTwo;