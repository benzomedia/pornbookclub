/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 13/08/2016
 * Time: 16:10
 */
import React from 'react'
import ImageUpload from '../FileUpload'
var Dropzone = require('react-dropzone');
import {Button} from 'rebass'


class EditImages extends React.Component {
    constructor() {
        super()
        this.onDrop = this.onDrop.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount(){
        if(this.props.user.user.images != null){
            this.props.setPreviewImage(this.props.user.user.images[0])
        } else {
            this.props.setPreviewImage(null)
        }
    }

    onDrop(files) {
        this.props.uploadImage(files, 'cover')
    }

    handleSubmit(){
        this.props.updateUserImages([this.props.imageUpload.cover])
    }

    render() {
        const {cover, isUploading} = this.props.imageUpload

        const style = {
            bar: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                paddingLeft: 16,
                paddingRight: 16
            }
        }
        return (
            <div className="edit-images-div">
                <div className="bar" style={style.bar}>
                    <div>
                        <h1>Edit Cover Image</h1>
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
                <div className="row">
                    <div className="profile-images col-xs-12 col-sm-6 col-sm-offset-3">
                        <ImageUpload onDrop={this.onDrop} preview={cover} imageLoading={isUploading} />
                    </div>
                </div>

            </div>
        )
    }
}

export default EditImages