 import React from 'react';

 const FormFields = ({formData}) => {

    const renderTemplate = () => {

        let formTemplate = null;

        switch(formData.element) {
            case('input'):
                formTemplate = (
                    <input 
                        {...formData.config}
                        className="form-control"
                        value={formData.value}            
                    />
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