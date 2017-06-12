import React from 'react'
import { Button, Media, Col, Grid, Row } from 'react-bootstrap'

const TopHeadingRow = () => (
    <Grid>
        <Row>
            <Col xs={4} md={8} className="text-left">
                <h2>TOP HEADING ROW ( LOGGED IN )</h2>
            </Col>
            <Col xsHidden={0} xsOffset={9}> 
                <Button style={style} bsStyle="primary" bsSize="large" active>Share</Button>
                <Button style={style} bsSize="large" active>Profile</Button>
                <img width={64} height={64} src="/assets/default_face_image.jpeg" alt="Image"/>
            </Col>
        </Row>
    </Grid>
)

const style = {
    marginRight: '5px'
}

export default TopHeadingRow