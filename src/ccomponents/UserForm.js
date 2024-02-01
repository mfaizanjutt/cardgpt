import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Add = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userId, setUserId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { title, body, userId }
        console.log(data)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then((response) => {
            console.log(response)
        })
    }

  return (
    <div>
        <form  className="container" onClick={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Title</label>
                <input type="text" className="form-control"
                onChange={(e) => setTitle(e.target.value)}

                 id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Body</label>
                <input type="text" className="form-control"
                onChange={(e) => setBody(e.target.value)}

                 id="exampleInputPassword1" required />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">User ID</label>
                <input type="number" className="form-control" 
                onChange={(e) => setUserId(e.target.value)}
                id="exampleInputPassword1" required />
            </div>
            <button type="submit"  className="btn btn-primary" >Submit</button>
        </form>
    </div>
  )
}

export default Add