import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact_fname: '',
            contact_lname: '',
            contact_email: '',
            contact_comment: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.fetchPost(this.state.contact_fname, this.state.contact_lname, this.state.contact_email, this.state.contact_comment).then(e.target.reset())
    }



    fetchPost = async (contact_fname, contact_lname, contact_email, contact_comment ) => {

       try {
        fetch('api/newContact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contact_fname: this.state.contact_fname,
                contact_lname: this.state.contact_lname,
                contact_email: this.state.contact_email,
                contact_comment: this.state.contact_comment
            })
        })
       }
        catch (error){
            throw error;
        }
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} method="post" action="/api/newContact" id="contact-us-form" className="p-2" >
                <div className="form-group input-group">
                    <input type="text" name="contact_fname" className="form-control" placeholder="First Name" onChange={this.changeHandler} required />
                </div>
                <div className="form-group input-group">
                    <input type="text" name="contact_lname" className="form-control" placeholder="Last Name" onChange={this.changeHandler} required />
                </div>
                <div className="form-group input-group">
                    <input type="email" name="contact_email" className="form-control" placeholder="Email" onChange={this.changeHandler} required />
                </div>
                <div className="form-group input-group">
                    <textarea name="contact_comment" id="contact_comment" className="form-control" placeholder="Leave a comment..." cols="30" rows="4" onChange={this.changeHandler} required></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" name="submit" id="submit" className="btn btn-primary btn-block" value="Send" />
                </div>
            </form>
        )
    }
}

export default ContactForm;