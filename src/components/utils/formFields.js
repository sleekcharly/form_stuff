 import React from 'react';

 const FormFields = ({formData, change, id, children}) => {

    const showError = () => {
        let errorMessage = null;

        if(
            formData.validation &&
            !formData.valid &&
            formData.validationMessage
        ){
            errorMessage = (
                <div className="error-label">
                    {formData.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }

    const renderTemplate = () => {

        let formTemplate = null;

        switch(formData.element) {
            case('input'):
                formTemplate = (
                    <>
                        <input 
                            {...formData.config}
                            className="form-control"
                            onBlur={(event)=>change({event, id, blur:true})}
                            onChange={(event)=>change({event, id, blur:null})}
                            value={formData.value}            
                        />
                        {showError()}
                    </>
                )
            break;
            case('select'):
                formTemplate = (
                    <>
                        <select 
                            {...formData.config}
                            value={formData.value}
                            className="form-control"
                            onBlur={(event)=>change({event, id, blur:true})}
                            onChange={(event)=>change({event, id, blur:null})}
                        >
                            {children}
                        </select>
                        {showError()}
                    </>
                )
            break;
            case('textarea'):
                formTemplate = (
                    <>
                        <textarea 
                            {...formData.config}
                            value={formData.value}
                            onBlur={(event)=>change({event, id, blur:true })}
                            onChange={(event) => change({event, id, blur:null})}
                            className="form-control"
                        >
                        </textarea>
                        {showError()}
                    </>
                )
            break;
            default:
                formTemplate = null;
        }

        return formTemplate;

    }

    return (
        <>
            {renderTemplate()}
        </>
    )
 }

 export default FormFields;