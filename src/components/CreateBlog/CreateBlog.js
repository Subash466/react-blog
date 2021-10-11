import React from 'react';
import SoloBlog from '../SoloBlog/SoloBlog';
import "./CreateBlog.css"

const CreateBlog = ({saveOrUpdate,currentId,contactObjects}) => {

  return (
    <div className="container create-blog">
                    <h1 className="display-4 text-center">Create Blog</h1>
        <SoloBlog {...({saveOrUpdate, currentId, contactObjects })}/>
    </div>
  )
}

export default CreateBlog
