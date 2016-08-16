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


    render() {
        return (
            <div className="home-div">
                <div className="home-bg"></div>
                <div className="home-text">
                    <h1 className="home-headline text-center">
                        The Biggest Porn Talent<br/> Index Online
                    </h1>
                    <h3 className="home-subheader text-center">Book the hottest entertainers in<br/>the porn industry
                    </h3>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        width: 250,
                        margin: "20px auto",
                        justifyContent: "space-between"
                    }}>
                        <Link to="/signup">
                            <Button
                                backgroundColor="primary"
                                color="white"
                                inverted
                                rounded
                            >
                                Sign up
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button
                                backgroundColor="#FF77BB"
                                color="white"
                                inverted
                                rounded
                            >
                                Log in
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
;

export default Home;