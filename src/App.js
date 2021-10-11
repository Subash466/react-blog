import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter , Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateBlog from './components/CreateBlog/CreateBlog';
import firebaseDb from './Firebase/Firebase';

function App() {
  
  var [contactObjects, setContactObjects] = useState({})
  var [currentId, setCurrentId] = useState('')

 
  useEffect(() => {
    firebaseDb.child('Blogs').on('value', snapshot => {
        if (snapshot.val() != null)
            setContactObjects({
                ...snapshot.val()
            })
        else
            setContactObjects({})
  
    })
  }, [])

  const saveOrUpdate=(values)=>{
    if (currentId === '')
    firebaseDb.child('Blogs').push(
        values,
        err => {
            if (err)
                console.log(err)
            else
                setCurrentId('')
        }
    )
else
    firebaseDb.child(`Blogs/${currentId}`).set(
        values,
        err => {
            if (err)
                console.log(err)
            else
                setCurrentId('')
        }
    )
  
 } 

  return (
    
    <div className="App">
       <BrowserRouter>
      <Switch>
        <Route  path="/" exact component={()=><Home contactObjects={contactObjects} setCurrentId={setCurrentId}/>} />
        <Route path="/blog" component={()=><CreateBlog saveOrUpdate={saveOrUpdate} contactObjects={contactObjects} currentId={currentId}/>} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
