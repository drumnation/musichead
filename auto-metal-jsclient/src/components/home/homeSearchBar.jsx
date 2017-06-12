import React, { Component } from 'react'
import { 
    FormGroup, 
    FormControl, 
    InputGroup, 
    Glyphicon 
} from 'react-bootstrap'

class HomeSearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: this.props.query
        }
    }
    render(props) {
        console.log('home search bar props', this.props)
        return (
            <FormGroup>
                <h2>HOME SEARCH BAR</h2>
                <InputGroup>
                    <FormControl
                        type="text"
                        placeholder="Search for an Artist"
                        value={ this.props.query }
                        onChange={ event => this.setState({ query: event.target.value }) }
                        onKeyPress={ event => {
                            if (event.key === 'Enter') {
                                this.props.search
                                console.log('event target value', event.target.value)
                            }
                        }}
                    />
                    <InputGroup.Addon onClick={ () => this.props.search }>
                        <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon>
                </InputGroup>
            </FormGroup>
        )
    }
}

export default HomeSearchBar