/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 12/08/2016
 * Time: 21:34
 */
import React from 'react'
import {Input, Textarea, Select, Container, Button} from 'rebass'
import MDSpinner from "react-md-spinner";
import ImageUpload from '../FileUpload'

class EditProfile extends React.Component {
    constructor() {
        super()

        this.state = {
            username: "",
            avatar: "",
            ethnicity: "",
            gender: "",
            quote: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.checkUserName = this.checkUserName.bind(this)
        this.onDrop = this.onDrop.bind(this)
        this.init = this.init.bind(this)
    }


    onDrop(files){
        this.props.uploadImage(files, 'avatar')
    }

    componentWillMount() {
        const {user} = this.props.user
        this.init(user)
    }

    componentWillReceiveProps(nextProps) {
        const {user} = nextProps.user
       this.init(user)
    }

    init(user){
        this.setState({
            username: user.username,
            avatar: user.avatar,
            ethnicity: user.ethnicity,
            gender: user.gender,
            age: user.age,
            quote: user.quote
        })
    }

    handleSubmit() {

        let user = {
            ...this.props.user.user,
            username: this.state.username,
            avatar: this.props.imageUpload.avatar,
            ethnicity: this.state.ethnicity,
            gender: this.state.gender,
            age: this.state.age,
            quote: this.state.quote
        }
        this.props.updateUserProfile(user)
    }

    checkUserName(){
       this.props.checkUsername(this.state.username)
    }


    render() {
        const style = {
            bar: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                paddingLeft: 16,
                paddingRight: 16
            },
            form: {
                border: "4px solid #CCCCDD",
                padding:"30px 16px 10px",
                borderRadius:2
            },
            avatar: {
                position:"relative",
                zIndex:99,
                marginBottom: -37
            }
        }


        const {usernameIsLoading, userNameAvailable} = this.props.user
        const {avatar, isUploading} = this.props.imageUpload

        let availableIcon;

        switch(userNameAvailable){
            case null:
                availableIcon = null;
                break;
            case true:
                availableIcon = <i className="material-icons" style={{color:"#33EEAA",position:"absolute",top:36,right:-33}}>check_circle</i>;
                break;
            case false:
                availableIcon = <i className="material-icons" style={{color:"#FF0000",position:"absolute",top:36,right:-33}}>error</i>;
                break;
            default:
                availableIcon = null;
        }
        return (
            <div className="edit-profile-div">
                <div className="bar" style={style.bar}>
                    <div>
                        <h1>Personal Details</h1>
                    </div>

                    <div>
                        <Button
                            backgroundColor="primary"
                            color="white"
                            inverted
                            rounded
                            onClick={this.handleSubmit}
                        >
                            Save
                        </Button>
                    </div>
                </div>
                <Container>

                    <div className="text-center profile-avatar" style={style.avatar}>
                       <ImageUpload onDrop={this.onDrop} preview={avatar} imageLoading={isUploading} />
                    </div>


                    <form>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-sm-offset-3" style={style.form}>
                                <div style={{position:"relative"}}>
                                <Input
                                    value={this.state.username}
                                    onChange={(e) => {this.setState({username:e.target.value})}}
                                    type="text"
                                    name="username"
                                    label="Username"
                                />
                                    {usernameIsLoading ? <MDSpinner
                                    size={20}
                                    color1="#334466"
                                    color2="#FF7FCC"
                                    color3="#33EEAA"
                                    color4="#00DDFF"
                                    style={{position:"absolute",top:36,right:-33}}
                                />: availableIcon}

                                </div>

                                <Input
                                    value={this.state.age}
                                    onChange={(e) => {this.setState({age:e.target.value})}}
                                    type="number"
                                    name="age"
                                    label="Age"
                                />

                                <Select
                                    value={this.state.gender}
                                    label="Gender"
                                    name="gender"
                                    onChange={(e) => {this.setState({gender:e.target.value})}}
                                    options={[
                                        {
                                            children: 'Select',
                                            value: ""
                                        },
                                        {
                                            children: 'Female',
                                            value: "female"
                                        },
                                        {
                                            children: 'Male',
                                            value: "male"
                                        }
                                        ]}
                                    rounded
                                />
                                <Select
                                    value={this.state.ethnicity}
                                    label="Ethnicity"
                                    name="ethnicity"
                                    onChange={(e) => {this.setState({ethnicity:e.target.value})}}
                                    options={[
                                        {
                                            children: 'Select',
                                            value: "",
                                        },
                                        {
                                            children: 'Caucasian',
                                            value: "caucasian"
                                        },
                                        {
                                            children: 'Black',
                                            value: "black"
                                        },
                                        {
                                            children: 'Asian',
                                            value: 'asian'
                                        },
                                        {
                                            children: 'Latino',
                                            value: 'latino'
                                        }
                                    ]}
                                    rounded
                                />
                                <Textarea
                                    label="Quote"
                                    onChange={(e) => {this.setState({quote:e.target.value})}}
                                    name="quote"
                                    value= {this.state.quote} />
                            </div>
                        </div>
                    </form>

                </Container>
            </div>
        )
    }
}

export default EditProfile