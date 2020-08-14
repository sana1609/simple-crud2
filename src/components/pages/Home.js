import React,{ useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
const Home=()=>{
	const [users,setUser]=useState([]);

	useEffect(()=>{
		loadUsers();


	},[]);
	const loadUsers=async()=>{
		const result=await axios.get("http://localhost:3001/users");
		console.log(result);
		setUser(result.data.reverse());
	};
	const deletUser=async id=>{
		await axios.delete(`http://localhost:3001/users/${id}`);
		loadUsers();


	}

	return(
		<div className="container">
		<div className="py-4">
		<h1>Home Page</h1>
		<table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
  	users.map((user,index)=>(
  		<tr>
  		<th scope="row">{index+1}</th>
  		<td>{user.name}</td>
  		<td>{user.username}</td>
  		<td>{user.email}</td>
  		<td>
  		<td><Link className="btn btn-primary" to={`/users/${user.id}`}>View</Link></td>
  		<td><Link className="btn btn-outline-primary" to={`/users/edit/${user.id}`}>Edit</Link></td>
  		<td><Link className="btn btn-danger" onClick={()=>deletUser(user.id)}>Delete</Link></td>
  		</td>
  		</tr>
  		))
  }
  </tbody>
</table>


		</div>
		</div>
		);
}
export default Home;