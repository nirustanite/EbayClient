import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/useractions'
import {changeEvent} from '../actions/useractions'
import {submitEvent} from '../actions/useractions'
import {redirect} from '../actions/useractions'
import SignUp from './SignUp'
import {Redirect} from 'react-router-dom'
import SignIn from './SignIn'

class SignUpContainer extends React.Component{
    onChange = (event) => {
        this.props.changeEvent(event.target.name, event.target.value)
    }

    componentDidUpdate(){
        console.log('component did udpate', this.props.redirectToggle)
        if(this.props.redirectToggle.redirect){
            this.props.history.push(`/login`) 
            //return <Redirect to="/" /> // React Component -> Renders
        }
    }
    
    onSubmit = (event) => {
        event.preventDefault()
        this.props.createUser(this.props.values)
        this.props.submitEvent()
        this.props.redirect()
        console.log("redirection toggle value",this.props.redirectToggle, this.props.history)
        //if(this.props.redirectToggle){
            return <Redirect to="/" />
        //}
       
    }
    render(){
        return(
            <SignUp 
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.props.values} />
        )
    }
}

const mapStateToProps = (state) => {
    return{
        values: state.createUser,
        redirectToggle: state.redirect 
    }
}

export default connect(mapStateToProps,{changeEvent,submitEvent,createUser,redirect})(SignUpContainer)