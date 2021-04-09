import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ViewStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Student: {}
        }
    }

    componentDidMount(){
        StudentService.getstudentById(this.state.id).then( res => {
            this.setState({Student: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Student First Name: </label>
                            <div> { this.state.Student.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Student Last Name: </label>
                            <div> { this.state.Student.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Student Email ID: </label>
                            <div> { this.state.Student.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStudent