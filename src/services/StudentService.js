import axios from 'axios';

const student_API_BASE_URL = "http://localhost:8080/project/students";

class StudentService {

    getstudents(){
        return axios.get(student_API_BASE_URL);
    }

    createstudent(student){
        return axios.post(student_API_BASE_URL, student);
    }

    getstudentById(studentId){
        return axios.get(student_API_BASE_URL + '/' + studentId);
    }

    updatestudent(student, studentId){
        return axios.put(student_API_BASE_URL + '/' + studentId, student);
    }

    deletestudent(studentId){
        return axios.delete(student_API_BASE_URL + '/' + studentId);
    }
}

export default new StudentService()