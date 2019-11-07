import React, {useState} from 'react';
import axios from 'axios';


    const Form = (props) => {

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
            setSubForm(true);
          }

    return(
        <div>
        {!subForm &&
        <div>
        <form className="form" onSubmit={handleSubmit}>
            <p className="info">Do you want to learn more about Tele2?</p>
            <p className="informationForm">Please submit your name and email and we will get in touch with you</p>
            <input placeholder="Name" type="text" label="Complete Name:" name="name" className="form" required/>
            <input placeholder="Email" type="email" label="Email:" name="email" className="form" required/>
            <div className="GDPR">
            <input type="checkbox" name="GDPRcheckbox" required></input>
                <label className="label">I accept that tele2 can use my personal information to contact me in the future</label>
            </div>
            <button className="submitBtn" type='submit'> SUBMIT </button>  
        </form>
        </div>
        }
        { subForm && 
        <div>
        <p className="informationForm">Thank you for your participation</p>
        <p className="informationForm">Visit us at tele2.com/career for more opportunities</p>
        <button className="restartBtn" onClick={props.restartGame}>Restart</button> 
        </div>
        }
        </div>
    );
}

export default Form;
