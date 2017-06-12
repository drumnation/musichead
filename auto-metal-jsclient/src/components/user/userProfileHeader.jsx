import React, { Component } from 'react'
import css from './style.css'

class UserProfileHeader extends Component {
    state = {  }
    render() {
        return (
            <div class="image-group">
                <h2>USER PROFILE HEADER</h2>
                <img src="/assets/default_face_image.jpeg" class="cover-image" />
                <div class="profile-image-group">
                    <img src="/assets/mastodon-cover.jpg" class="profile-image" />
                    <input id="image-checkbox" type="checkbox" class="image-checkbox" />    
                    <label for="image-checkbox" class="image-overlay">
                        <i class="fa fa-camera"></i>
                    </label>
                    <ul class="image-menu">
                        <li><a href=""><i class="fa fa-file-image-o"></i> Choose from Photos...</a></li>
                        <li><a href=""><i class="fa fa-camera-retro"></i> Take Photo...</a></li>
                        <li><a href=""><i class="fa fa-upload"></i> Upload Photo...</a></li>
                        <li><a href=""><i class="fa fa-times"></i> Remove...</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserProfileHeader