/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 14/06/2016
 * Time: 15:33
 */
import React from 'react';
import {Button} from 'rebass'
import {Link} from 'react-router'


class Home extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(role){
        this.props.setRole(role)
    }

    render() {
        return (
            <div>
                <h2 className="text-center">
                    Porn Book Club
                </h2>
                <div style={{display:"flex", alignItems:"center",width:200, margin:"100px auto",justifyContent:"space-between"}}>
                    <Link to="/signup" onClick={ ()=>{this.handleSubmit("actor")} }>
                        <Button
                            backgroundColor="primary"
                            color="white"
                            inverted
                            rounded
                        >
                            Actor
                        </Button>
                    </Link>
                    <Link to="/signup" onClick={ ()=>{this.handleSubmit("agent")} }>
                        <Button
                            backgroundColor="primary"
                            color="white"
                            inverted
                            rounded
                        >
                            Agent
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
};

export default Home;