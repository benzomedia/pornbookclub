/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 12/08/2016
 * Time: 22:06
 */
import React from 'react'
import {Toolbar, NavItem, Space, Dropdown, DropdownMenu, Arrow, Avatar} from 'rebass'
import {Link} from 'react-router'

class AppToolbar extends React.Component {
    constructor() {
        super()
        this.state = {
            dropDownOpen: false
        }
        this.toggleDropDown = this.toggleDropDown.bind(this)
    }


    toggleDropDown() {
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        })
    }

    render() {
        const {user} = this.props.user
        return (
            <Toolbar>
                <NavItem to={user.id ? '/index' : '/'}
                         is={Link}
                         children={<img className="logo" src="/images/logo.png" style={{maxWidth:140}} />}/>
                <Space
                    auto
                    x={1}
                />
                {!user.id ?
                    <NavItem to='/login'
                             is={Link}
                             children='Login'/>: null}
                {user.id ?
                    <div>
                    <Dropdown>
                        <NavItem onClick={this.toggleDropDown}>
                            <Avatar
                                circle
                                size={48}
                                style={{border: "3px solid #CCCCDD"}}
                                src={user.avatar}
                            />
                            <Arrow direction="down"/>
                        </NavItem>
                        <DropdownMenu onDismiss={this.toggleDropDown}
                                      open={this.state.dropDownOpen}
                                      right={true}>
                            <NavItem
                                to='/profile/edit'
                                is={Link}
                                children='Profile'/>
                            <NavItem
                                to='/profile/edit/images'
                                is={Link}
                                children='Cover'/>
                            <NavItem
                                href="/auth/logout"
                                is="a"
                                children='Logout'/>
                        </DropdownMenu>
                    </Dropdown>
                        </div>:

                    <NavItem to='/signup'
                             is={Link}
                             children='Signup'/>}
            </Toolbar>
        )
    }
}

export default AppToolbar