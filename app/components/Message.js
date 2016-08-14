/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 26/07/2016
 * Time: 22:28
 */
import React from 'react'
import {Message, Close, Space} from 'rebass'


class AppMessage extends React.Component {

    render() {
        const {messageOpen, message} = this.props.message
        const {toggleMessage} = this.props
        const style = {
            position:"fixed",
            zIndex:9999999,
            top: 73,
            right: 10
        }
        return (
            <div>
                {messageOpen ? <Message
                    style={style}
                    inverted
                    rounded
                    theme="info"
                >
                    {message}
                    <Space
                        auto
                        x={1}
                    />
                    <Close onClick={toggleMessage} />
                </Message> : null}
            </div>
        )
    }
}

export default AppMessage