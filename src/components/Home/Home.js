import React from 'react';
import { Link } from 'react-router-dom';
import firebaseDb from '../../Firebase/Firebase'
import "./Home.css"

const Home = ({contactObjects,setCurrentId}) => {
  
 const onDelete = key => {
  if (window.confirm('Are you sure to delete this Blog?')) {
      debugger
      firebaseDb.child(`Blogs/${key}`).remove(
          err => {
              if (err)
                  console.log(err)
              else
                  setCurrentId('')
          }
      )
  }
}
 
  
  return (
    <div className="container-fluid">
                    <h1 className="heading">Blogs</h1>
      {Object.keys(contactObjects).map((id)=>{
        return(
          <div className="home" key={id}>
          <div className="singleBlog container" >
          <div className="info"><h4>Creator Name : <span>{contactObjects[id].name}</span></h4><h4>Date : <span>{contactObjects[id].date}</span></h4></div>
          <h1>{contactObjects[id].title}</h1>
          <p>{contactObjects[id].disc.substring(0,150)}   
          <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">read more....</button>
          </p>
          
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog  modal-lg" role="document">
           <div className="modal-content">
           <div className="modal-header">
           <h3 className="modal-title" id="exampleModalLabel">{contactObjects[id].title}</h3>
          <button type="button" className="close" data-dismiss="modal"  aria-label="Close">
           <span aria-hidden="true">&times;</span>
          </button>
          </div>
          <div className="modal-body" id="disc-body">
           {contactObjects[id].disc}
          </div>
        </div>
      </div>
     </div>
     <div className="click">
            <button type="button" className="btn btn-danger" onClick={() => { onDelete(id) }}>Delete</button>
            <Link  to="/blog">
             <button type="button" className="btn btn-primary" onClick={()=>setCurrentId(id)}>Update</button>
            </Link>
       </div>
    </div>  
      
       </div>
          )
      })}
      <Link to="/blog">
      <button  className="btn btn-success">Create Blog</button>
      </Link>
    </div>
  )
}

export default Home
