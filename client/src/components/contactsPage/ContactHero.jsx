import React from 'react';
import ContactForm from './ContactForm'

const ContactHero = () => {
    return (
        <section className="container-fluid hero_main_contact">
            <div className="hero-contact">
                <h1><span className="yellow-text">Contact</span> Us</h1>  
                <div className="container contact-form-container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 mt-5 bg-light rounded">
                            <ContactForm />
                        </div>
                    </div>
                </div>   
            </div>
        </section>
    )
}

export default ContactHero;