import React,{ useState,useEffect }from 'react';
import { useHistory,useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser=()=>{
	let history=useHistory();
	const{id}=useParams();
	const[user,setUser]=useState({
		name:"",
		username:"",
		email:"",
		phone:"",
		website:""
	});
	const{name,username,email,phone,website}=user;
	const onInputChange=(e)=>{
		console.log(e.target.value);
		setUser({...user,[e.target.name]:e.target.value})

	};

	useEffect(()=>{
		loadUser();
	},[]);

	const onSubmit=async e=>{
		e.preventDefault();
		await axios.put(`http://localhost:3001/users/${id}`,user);
		history.push("/")

	};
	const loadUser=async()=>{
		const result=await axios.get(`http://localhost:3001/users/${id}`);
		setUser(result.data);
	};
	return (
		<div>
		<h2>Edit A User</h2>
		<hr/>
		<form onSubmit={e=>onSubmit(e)}>
		 <div className="form-group">
	    <label for="Name">Enter Your Name</label>
	    <input type="text" class="form-control" name="name" value={name} onChange={e=>onInputChange(e)}/>
	  </div>
	   <div class="form-group">
	    <label for="Name">Enter Your User Name</label>
	    <input type="text" class="form-control" name="username" value={username}
	    onChange={e=>onInputChange(e)}

	    />
	  </div>
	   <div class="form-group">
	    <label for="Name">Enter Your Email Address</label>
	    <input type="text" class="form-control" name="email" value={email}
	    onChange={e=>onInputChange(e)}
	    />
	  </div>
	   <div class="form-group">
	    <label for="Name">Enter Your Phone Number</label>
	    <input type="text" class="form-control" name="phone" value={phone}
	    onChange={e=>onInputChange(e)}

	    />
	  </div>
	   <div class="form-group">
	    <label for="Name">Enter Your Website Name</label>
	    <input type="text" class="form-control" name="website" value={website}
	    onChange={e=>onInputChange(e)}
	    />
	  </div>
	  <button type="submit" class="btn btn-warning">Update User</button>
	  	</form>
	  	</div>
		)
};
export default EditUser;