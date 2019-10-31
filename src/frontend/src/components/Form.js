import React from 'react';


    const Form = () => {


    return(
        <form>
            <input placeholder="Name" type="text" label="Complete Name:"/>
            <input placeholder="Email" type="email" label="Email:"/>
            <button type="submit">
                SUBMIT
            </button>
        </form>
    );
}

export default Form;