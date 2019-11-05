import React from 'react';


    const Form = () => {

       const handleSubmit = (event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            console.log(name);
            const data = {
                name: name,
                email: email
            }
            
            fetch('/player', {
              method: 'POST',
              body: data,
              headers: { 'Content-Type': 'application/json' } 
            });
          }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="info">Do you want to learn more about tele2</div>
            <input placeholder="Name" type="text" label="Complete Name:" name="name"/>
            <input placeholder="Email" type="email" label="Email:" name="email"/>
            <button className="submitBtn">
                SUBMIT
            </button>
        </form>
    );
}

export default Form;