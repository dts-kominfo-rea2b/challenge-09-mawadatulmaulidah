// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
    const {data} = props;

    return (
        <div className="card center">
            <div className='cardFoto'>
                <img src={data.photo}></img>
            </div>
            <div className="cardDetail">
                <h4>{data.name}</h4>
                <br></br>
                <p>{data.phone}</p>
                <br></br>
                <p>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;
