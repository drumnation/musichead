import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function connectedWithRoutes(mapStateToProps, mapDispatchToProps) {
    return function (WrappedComponent) {
        function newMapStateToProps(state, ownProps) {
            return {
                ...ownProps,
                ...mapStateToProps(state)
            }
        }
    
        function newMapDispatchToProps(dispatch, ownProps) {
            return {
                ...ownProps,
                ...mapDispatchToProps(dispatch)
            }
        }
        return withRouter(connect(newMapStateToProps, newMapDispatchToProps)(WrappedComponent))
    }
}

export default connectedWithRoutes