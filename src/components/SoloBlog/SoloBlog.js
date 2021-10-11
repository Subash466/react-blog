import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./SoloBlog.css"

const SoloBlog = (props) => {
  const initialFieldValues = {
    title: '',
    disc: '',
    name: '',
    date: ''
}

 const [values, setValues] = useState(initialFieldValues);

 useEffect(() => {
    if (props.currentId === '')
        setValues({
            ...initialFieldValues
        })
    else{
        setValues({
            ...props.contactObjects[props.currentId]
           
        })
    }
    // eslint-disable-next-line
}, [props.currentId, props.contactObjects])


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    props.saveOrUpdate(values);
  }
   
  const check=()=>{
      if(values.title && values.disc && values.name && values.date){
         props.currentId === '' ? alert( "Created Successfully") :  alert("Update Successfully")
  }else{
      alert("Kindly fill the form properly")
  }
}
  return (
    <div className="container blog">
        <form autoComplete="off" id="form" onSubmit={handleSubmit}>
            <div className="form-group input-group col-md-12">
                <input className="form-control" placeholder="Enter Title" name="title" required
                    value={values.title}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group ">
                <textarea className="form-control" placeholder="Enter discription.." name="disc" rows="8" required
                    value={values.disc}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group one col-md-12">
                    <input className="form-control" placeholder="Enter Name..." name="name"  required
                        value={values.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group one col-md-12">
                    <input type="date" className="form-control " placeholder="Enter Publish date" name="date" required
                        value={values.date}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            
            <div className="form-group"> 
                <button type="submit" className="btn btn-success btn-block" onClick={check}>{props.currentId === '' ? "Create New" : "Update"}</button>
                <Link to="/">
                <button type="submit" className="btn btn-secondary btn-block" >Go back</button>
                </Link>
            </div>
            
        </form >
    </div>
  )
}

export default SoloBlog
