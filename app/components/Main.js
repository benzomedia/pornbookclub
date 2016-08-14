/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 14/06/2016
 * Time: 15:35
 */
var React = require('react');
import Message from './Message';
import hello from '../config/hello'
import Toolbar from './Toolbar'

class Main extends React.Component {

    componentWillMount() {
        this.props.getUser()
        this.props.getActors()
    }

    getChildContext () {
        return {
            rebass: hello
        }
    }
    render() {
        return (
            <div className="main-container">
                <Toolbar  {...this.props}/>
                <div>
                    {React.cloneElement(this.props.children, {...this.props})}
                </div>
                <Message {...this.props}/>
            </div>
        );
    }
}


Main.childContextTypes = {
    rebass: React.PropTypes.object
}

export default Main;