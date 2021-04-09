import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ListStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                students: []
        }
        this.addstudent = this.addstudent.bind(this);
        this.editstudent = this.editstudent.bind(this);
        this.deletestudent = this.deletestudent.bind(this);
    }

    deletestudent(id){
        StudentService.deletestudent(id).then( res => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }
    viewstudent(id){
        this.props.history.push(`/view-student/${id}`);
    }
    editstudent(id){
        this.props.history.push(`/add-student/${id}`);
    }

    componentDidMount(){
        StudentService.getstudents().then((res) => {
            this.setState({ students: res.data});
        });
    }

    addstudent(){
        this.props.history.push('/add-student/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">students List</h2>
                 <div className = "row">
                    <button className="btn btn-primary " onClick={this.addstudent}> Add student</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> student First Name</th>
                                    <th> student Last Name</th>
                                    <th> student Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        student => 
                                        <tr key = {student.id}>
                                             <td> { student.firstName} </td>   
                                             <td> {student.lastName}</td>
                                             <td> {student.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editstudent(student.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletestudent(student.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewstudent(student.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListStudent