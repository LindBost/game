import React, {useState} from 'react';
import logo from '/Users/linda/Documents/code/game/src/frontend/src/Tele2_Logo_White.svg';
import axios from 'axios';


    const Form = () => {

        const [subForm, setSubForm] = useState(false);

       const handleSubmit = async(event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;

            const data = {
                name: name,
                email: email
            }
            
            const res = await axios.post(
                '/player',
                { name: name,
                  email: email
                },
                { headers: { 'Content-Type': 'application/json' } }
            )
            console.log(res);
          }

          const doneSubmit = () => {
            
            console.log("done");
            setSubForm(true);
          }

    return(
        <div>
        {!subForm &&
        <form className="form" onSubmit={handleSubmit}>
            <img className="logo" src={logo} alt="“website logo”" />
            <div className="info">Do you want to learn more about tele2</div>
            <input placeholder="Name" type="text" label="Complete Name:" name="name"/>
            <input placeholder="Email" type="email" label="Email:" name="email"/>
            <button className="submitBtn" onClick={doneSubmit}>
                SUBMIT
            </button>
        </form>
        }
        {subForm && <div>tack</div> }
        <img className="logo" src={logo} alt="“website logo”" />
        </div>
    );
}

export default Form;
