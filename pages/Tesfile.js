import React, { useState,useEffect } from 'react';
import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'
  })
const Tesfile = (props) => {
    const submitButton = async (e) => {
        
        e.preventDefault()   
        if (form.nama === '' || form.address === '' || form.telp ==='') {
          alert('Please fill all the fields')
        }
        else {        
        const request = {
            nama : form.nama,  
            address: form.address,
            telp : form.telp     
        }       
          const response = await api.post('/tesinput1', request)
          console.log(response)           
        }   
      }

      const [form, setform] = useState({
        nama: ''        
      })
      const inputHandler = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })   
       }

    return(
        <div>
		      <div className="content-wrapper">
				{/* Content Header (Page header) */}
				<div className="content-header">
				  <div className="container-fluid">
					<div className="row mb-2">
					  <div className="col-sm-6">
						<h1 className="m-0 text-dark">Dashboard</h1>
					  </div>{/* /.col */}
					  <div className="col-sm-6">
						<ol className="breadcrumb float-sm-right">
						  <li className="breadcrumb-item"><a href="#">Home</a></li>
						  <li className="breadcrumb-item active">Dashboard v1</li>
						</ol>
					  </div>{/* /.col */}
					</div>{/* /.row */}
				  </div>{/* /.container-fluid */}
				</div>
				{/* /.content-header */}
				{/* Main content */}
				<section className="content">
				  <div className="container-fluid">
				  
				  
				  <div className="card card-default">
			  <div className="card-header">
				<h3 className="card-title">Select2 (Default Theme)</h3>
				<div className="card-tools">
				  <button type="button" className="btn btn-tool" data-card-widget="collapse">
					<i className="fas fa-minus" />
				  </button>
				  <button type="button" className="btn btn-tool" data-card-widget="remove">
					<i className="fas fa-times" />
				  </button>
				</div>
			  </div>
			  {/* /.card-header */}
			  <div className="card-body">
				<div className="row">
				  <div className="col-md-6">
					<div className="card card-success">
						<div className="card-header">
							<h3 className="card-title">Master S</h3>
						</div>
						<div className="card-body">
							<div className="form-group row">
								<label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Name</label>
								<div className="col-sm-9">
									<input type="text" 	name="nama" className="form-control form-control-sm" id="inputPassword3" value={form.nama} onChange={inputHandler} placeholder="Name"/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Address</label>
								<div className="col-sm-9">
									<input type="text" className="form-control form-control-sm" name="address" id="inputPassword3" value={form.address} onChange={inputHandler} placeholder="Address" />
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Telp</label>
								<div className="col-sm-9">
									<input type="text" className="form-control form-control-sm" name='telp'  id="inputPassword3" value={form.telp} onChange={inputHandler} placeholder="Telp" />
								</div>
							</div>
								<div className="form-group row">
								<label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Username</label>
								<div className="col-sm-9">
									<input type="text" className="form-control form-control-sm" id="inputPassword3" placeholder="Username" />
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
								<div className="col-sm-9">
									<input type="password" className="form-control form-control-sm" id="inputPassword3" placeholder="Password" />
								</div>
							</div>
							<div className="form-group row">
							<label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Akses</label>
								<div>
								<div className="custom-control custom-checkbox">
									<input className="custom-control-input" type="checkbox" id="customCheckbox1" defaultValue="option1" />
									<label htmlFor="customCheckbox1" className="custom-control-label">Master Supplier</label>
								</div>
								<div className="custom-control custom-checkbox">
									<input className="custom-control-input" type="checkbox" id="customCheckbox2" defaultValue="option1" />
									<label htmlFor="customCheckbox2" className="custom-control-label">Master Staff</label>
								</div>
								</div>
							</div>
						</div>	
						<div className="card-footer">
							<button  onClick={submitButton} className="btn btn-primary">Submit</button>
						</div>
			
					</div>



					{/* /.form-group */}
				  </div>
				  {/* /.col */}
				{/*}  <div className="col-md-6">
				  <div className="form-group">
					  <label>Multiple</label>
					  <select className="select2" multiple="multiple" data-placeholder="Select a State" style={{width: '100%'}}>
						<option>Alabama</option>
						<option>Alaska</option>
						<option>California</option>
						<option>Delaware</option>
						<option>Tennessee</option>
						<option>Texas</option>
						<option>Washington</option>
					  </select>
				  </div>
					//.form-group 
					<div className="form-group">
					  <label>Disabled Result</label>
					  <select className="form-control select2" style={{width: '100%'}}>
						<option selected="selected">Alabama</option>
						<option>Alaska</option>
						<option disabled="disabled">California (disabled)</option>
						<option>Delaware</option>
						<option>Tennessee</option>
						<option>Texas</option>
						<option>Washington</option>
					  </select>
					</div>
					 //.form-group 
				  </div>*/}
				  {/* /.col */}
				</div>
				{/* /.row */}
					{/*<h5>Custom Color Variants</h5>*/}
				<div className="row">
				  <div className="col-12 col-sm-6">
				  {/*<div className="form-group">
					  <label>Minimal (.select2-danger)</label>
					  <select className="form-control select2 select2-danger" data-dropdown-css-class="select2-danger" style={{width: '100%'}}>
						<option selected="selected">Alabama</option>
						<option>Alaska</option>
						<option>California</option>
						<option>Delaware</option>
						<option>Tennessee</option>
						<option>Texas</option>
						<option>Washington</option>
					  </select>
				  </div>*/} 
					{/* /.form-group */}
				  </div>
				  {/* /.col */}
				  <div className="col-12 col-sm-6">
				  {/*<div className="form-group">
					  <label>Multiple (.select2-purple)</label>
					  <div className="select2-purple">
						<select className="select2" multiple="multiple" data-placeholder="Select a State" data-dropdown-css-class="select2-purple" style={{width: '100%'}}>
						  <option>Alabama</option>
						  <option>Alaska</option>
						  <option>California</option>
						  <option>Delaware</option>
						  <option>Tennessee</option>
						  <option>Texas</option>
						  <option>Washington</option>
						</select>
					  </div>
					</div>*/}
					{/* /.form-group */}
				  </div>
				  {/* /.col */}
				</div>
				{/* /.row */}
			  </div>
			  {/* /.card-body 
			  <div className="card-footer">
				Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
				the plugin.
			  </div>*/}
			</div>
				  
				  
				  
				  
				
				  </div>{/* /.container-fluid */}
				</section>
				{/* /.content */}
			  </div>
		  </div>
    )
}
export default Tesfile;