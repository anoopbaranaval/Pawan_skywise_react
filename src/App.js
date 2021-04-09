import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListStudent from './components/ListStudent';
import CreateStudent from './components/CreateStudent';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <div>
        <Router>
              
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListStudent}></Route>
                          <Route path = "/students" component = {ListStudent}></Route>
                          <Route path = "/add-student/:id" component = {CreateStudent}></Route>
                          <Route path = "/view-student/:id" component = {ViewStudent}></Route>
                          {/* <Route path = "/update-student/:id" component = {UpdatestudentComponent}></Route> */}
                    </Switch>
                 </div>              
        </Router>
    </div>
    
  );
}

export default App;