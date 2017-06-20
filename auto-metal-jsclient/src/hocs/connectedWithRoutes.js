import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function connectedWithRoutes(mapStateToProps, mapDispatchToProps) {
    return WrappedComponent => withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedComponent))
}

export default connectedWithRoutes