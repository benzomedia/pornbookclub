/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 16/06/2016
 * Time: 00:34
 */
import React from 'react';
import Footer from '../Footer';
import mixpanel from 'mixpanel-browser'
import {Input, Button} from 'rebass'
import {Link} from 'react-router'

class Signin extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {

        e.preventDefault();
        this.props.login(this.state.email.toLowerCase(), this.state.password)
        this.setState({
            password: ""
        })

    }


    render() {
        return (
            <div>
                <img src="/images/logo_icon.png" className="center-block" style={{marginTop: 50, marginBottom: 50}}/>
                <h1 className="text-center" style={{marginBottom: 30}}>Sign in to Porn Book Club</h1>
                <div className="signup-div col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">

                    <form onSubmit={this.handleSubmit}>

                        <Input id="email_input"
                               type="email"
                               name="email"
                               label="Email"
                               value={this.state.email}
                               onChange={(e) => this.setState({email: e.target.value})}
                               required/>

                        <Input id="password_input"
                               type="password"
                               value={this.state.password}
                               name="password"
                               label="Password"
                               onChange={(e) => this.setState({password: e.target.value})}
                               required/>
                        <p style={{paddingTop: 5}}>Forgot password? <Link to="/password">Click here</Link></p>

                        <Button
                            backgroundColor="primary"
                            color="white"
                            inverted
                            rounded
                            style={{width: "100%", marginBottom: 15}}
                        >
                            Submit
                        </Button>
                    </form>
                    <p className="text-center">First time here? <Link to="/signup">Sign up</Link></p>
                </div>
                <Footer />
            </div>
        );
    }
};




export default Signin