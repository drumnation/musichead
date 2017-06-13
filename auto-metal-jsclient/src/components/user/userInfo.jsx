import React, { Component } from 'react'
import { Panel, Glyphicon } from 'react-bootstrap'
import '../../App.css'

class UserInfo extends Component {
    render() {
        return (
            <div>
                <Panel header={title}>
                    <div className="profile">
                        <img
                            alt="Profile"
                            className="profile-img"
                            src="/assets/default_face_image.jpeg"
                        />
                        <div className="profile-info">
                            <div className="profile-name">User Name</div>
                            <div className="profile-followers">
                                Recently listened to: Almighty's Murderer by Gorod
                            </div>
                            <div className="profile-genres">
                                <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. </p>
                            </div>
                        </div>
                    </div>
                </Panel>
            </div>
        )
    }
}

const title = (
    <p><Glyphicon glyph="user" />&#32;&#32;<strong>ABOUT</strong></p>
)

export default UserInfo