/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 15/06/2016
 * Time: 17:05
 */
import React from 'react'
import Footer from '../Footer'
import CircularProgress from 'material-ui/CircularProgress'
import {Input, Button, Select} from 'rebass'
import {Link} from 'react-router'

class Signup extends React.Component {

    constructor() {
        super()
        this.state = {
            role: 'actor',
            username: '',
            email: '',
            password: '',
            verify_password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state.role, this.state.username, this.state.email, this.state.password, this.state.verify_password)
    }

    render() {
        const {isLoading} = this.props.auth
        return (
            <div>
                <img src="/images/logo_icon.png" className="center-block" style={{marginTop: 50, marginBottom: 50}}/>
                <h1 className="text-center" style={{marginBottom: 30}}>Create {this.props.params.role} account</h1>
                <div className="signup-div col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">

                    <form onSubmit={this.handleSubmit}>
                        <Select
                            value={this.state.role}
                            label="You are an"
                            name="role"
                            onChange={(e) => {
                                this.setState({role: e.target.value})
                            }}
                            options={[
                                {
                                    children: 'Entertainer',
                                    value: 'actor'
                                },
                                {
                                    children: 'Agent',
                                    value: 'agent'
                                }
                            ]}
                            rounded
                        />

                        <Input id="username_input"
                               type="text"
                               label="Username"
                               name="username"
                               onChange={(e)=> {
                                   this.setState({username: e.target.value})
                               } }
                               required/>

                        <Input id="email_input"
                               label="Email"
                               type="email"
                               name="email"
                               onChange={(e)=> {
                                   this.setState({email: e.target.value})
                               } }
                               required/>

                        <Input id="password_input"
                               label="Password"
                               type="password"
                               name="password"
                               onChange={(e)=> {
                                   this.setState({password: e.target.value})
                               } }
                               required/>

                        <Input id="verify_password_input"
                               label="Verify Password"
                               type="password"
                               name="verify_password"
                               onChange={(e)=> {
                                   this.setState({verify_password: e.target.value})
                               } }
                               required/>

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
                    <p className="text-center">Already have an account? <Link to="/login">Sign in</Link></p>
                </div>
                { isLoading ? <CircularProgress
                    style={{position: "absolute", left: "50%", marginLeft: -25, top: "50%", marginTop: -25}}/> : null }
                <Footer />
            </div>
        );
    }
}
;


export default Signup