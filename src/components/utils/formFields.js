 import React from 'react';

 const FormFields = ({formData, change, id}) => {

    const renderTemplate = () => {

        let formTemplate = null;

        switch(formData.element) {
            case('input'):
                formTemplate = (
                    <input 
                        {...formData.config}
                        className="form-control"
                        onBlur={(event)=>change({event, id})}
                        onChange={(event)=>change({event, id})}
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