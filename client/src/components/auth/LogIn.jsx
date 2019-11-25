import React from 'react'
import httpClient from '../../httpClient'

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { email, password } = this.state.fields
		return (
			<section className="container-fluid hero_main_contact">
            <div className="hero-login">
                <h1><span className="yellow-text">Log</span> In</h1>  
                <div className="container contact-form-container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 mt-5 bg-light rounded">
							<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)} id="contact-us-form" className="p-2" >
								<div className="form-group input-group">
									<input type="text" name="email" className="form-control" placeholder="Email" value={email} required />
								</div>
								<div className="form-group input-group">
									<input type="password" name="password" className="form-control" placeholder="Password" value={password} required />
								</div>
								<div className="form-group">
									<input type="submit" name="submit" id="submit" className="btn btn-primary btn-block" value="Send" />
								</div>
							</form>
                        </div>
                    </div>
                </div>   
            </div>
        </section>
			////////////////////
			
			
		)
	}
}

export default LogIn