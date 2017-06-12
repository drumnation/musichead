import React from 'react'
import { Button, Media } from 'react-bootstrap'

const TopHeadingRow = () => (
    <div>
        <Media>
            <Media.Left>
                <h2>TOP HEADING ROW ( LOGGED IN )</h2>
            </Media.Left>
            <Media.Right> 
                <Button style={style} bsStyle="primary" bsSize="large" active>Share</Button>
                <Button style={style} bsSize="large" active>Profile</Button>
                <img width={64} height={64} src="/assets/default_face_image.jpeg" alt="Image"/>
            </Media.Right>
        </Media>
    </div>
)

const style = {
    marginRight: '5px'
}

export default TopHeadingRow