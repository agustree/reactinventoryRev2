import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { Link } from 'react-router-dom'; 
import * as FaIcons from 'react-icons/fa';
import { IconContext } from "react-icons";
const api = axios.create({
    baseURL: 'http://localhost:5000'
  })
const Masterstaff2 = (props) => {
	
	  useEffect(() => {
        getdata();
		
    }, []);
	
	const[dataStaff, setDatastaff] = useState([]);
 	const[Checkd,setcheckd]=useState(false);
    const[Checkd2,setcheckd2]=useState(false);
	const [telp, setTelp] = useState();
      const inputHandler = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })   
         const value = e.target.value.replace(/\D/g, "");
         setTelp(value);		
       }

       const  getdata=async() =>{
		   const response = await axios.get('http://localhost:5000/getdatastaff');
           setDatastaff(response.data);
	   }
       const handlecheck = (e) =>{
		   setcheckd(!Checkd);
	   }
	   
	   const handlecheck2 = (e) =>{
		   setcheckd2(!Checkd2);
	   }
       const [form, setform] = useState({

        nama: '',
		address :'',
		telp : '',
		username :'',
		pass : '',
        nama: ''     
      })

      const submitButton = async (e) => {        
                e.preventDefault()   
                if (form.nama === '' || form.address === '' || form.telp === '' || form.username ==='' || form.pass==='') {
                alert('Please fill all the fields')
                }
                else {  
				    let aksesnya="";
				    if(Checkd){
						aksesnya=aksesnya+form.cekA;
					}
					if(Checkd2){
						aksesnya=aksesnya+form.cekB;
					}
                   
                    
                const request = {
                    
                    nama : form.nama,  
                    address: form.address,
                    telp : form.telp,
                    username : form.username,
                    password : form.pass,
                    akses : aksesnya  
                }       
                const response = await api.post('/staffinput', request)
                console.log(response)  
                resetform();
				setcheckd(false);
				setcheckd2(false);
            }
        }

        const resetform = (e) => {
            setform({
            nama: '',
            address :'',
            telp : '',
            username :'',
            pass : ''
            

            }) 

         
        }

    return(
        <div>
            <div className="content-wrapper">
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
                                    <div className="card-body">
                                    <div className="row">
								<div className="col-md-7">
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
                                        <input type="text" pattern="[0-9]*"  maxLength="12" className="form-control form-control-sm" name='telp'  id="inputPassword3" value={telp} onChange={inputHandler} placeholder="Telp" />
                                        </div>
                                    </div>
                                        <div className="form-group row">
                                        <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Username</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control form-control-sm" id="inputPassword3" name='username' value={form.username} onChange={inputHandler} placeholder="Username" />
                                         </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                                        <div className="col-sm-9">
                                            <input type="password" className="form-control form-control-sm" name='pass' value={form.pass} onChange={inputHandler}  id="inputPassword3" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                    <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Akses</label>
                                      
										
												 <div className="col-sm-4">
													<div className="custom-control custom-checkbox">
														<input className="custom-control-input" onClick={handlecheck}  type="checkbox" checked={Checkd} name='cekA' value='1' onChange={inputHandler} id="customCheckbox1"  defaultValue="option1" />
														<label htmlFor="customCheckbox1" className="custom-control-label">Master Supplier</label>
													</div>								
												 </div>
												  <div className="col-sm-4">
													<div className="custom-control custom-checkbox">
														<input className="custom-control-input" type="checkbox" onClick={handlecheck2} checked={Checkd2} name='cekB' value='2' onChange={inputHandler}  id="customCheckbox2"  defaultValue="option2" />
														<label htmlFor="customCheckbox2" className="custom-control-label">Master Staff</label>
													</div>
												 </div>
										  
                                   
                                    </div>
                                </div>	
                                <div className="card-footer">
                                    <button  onClick={submitButton} className="btn btn-primary">Submit</button>
                                </div>
                    
                            </div>
                                    </div>
									<div className="col-md-5">
                                                                    <div className="card-body p-0">
                                <table className="table table-sm" style={{textAlign:'center'}}>
                                    <thead>
                                    <tr>
                                        <th style={{width: 10}}>#</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th style={{width: 40}}>Telp</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
											{dataStaff.map((staff, index) =>(
											<tr key={ staff.staff_id }>
												<td>{ index + 1 }</td>
												<td>{ staff.name }</td>
												<td>{ staff.address }</td>			
                                                <td>{ staff.telp }</td>		
												{/*<td><Moment format="YYYY-MM-DD">{ staff.tglbeli }</Moment></td>*/}
												<td>
													<Link  to={{
														pathname: "/Edit",
														state: {id:staff.id}
													}}>

														<IconContext.Provider  value={{ color: "green",size:"1.5em", className: "global-class-name" }}>
															<FaIcons.FaEdit />
														</IconContext.Provider>
												    </Link>
													<Link to="/search">
														<IconContext.Provider value={{ color: "red",size:"1.2em", className: "global-class-name" }}>
															<FaIcons.FaTrashAlt />
														</IconContext.Provider>									
													</Link>

												</td>
											</tr>
											))},
                                {/*    <tr>
                                        <td>1.</td>
                                        <td>Update software</td>
                                        <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
                                        </div>
                                        </td>
                                        <td><span className="badge bg-danger">55%</span></td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>Clean database</td>
                                        <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar bg-warning" style={{width: '70%'}} />
                                        </div>
                                        </td>
                                        <td><span className="badge bg-warning">70%</span></td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>Cron job running</td>
                                        <td>
                                        <div className="progress progress-xs progress-striped active">
                                            <div className="progress-bar bg-primary" style={{width: '30%'}} />
                                        </div>
                                        </td>
                                        <td><span className="badge bg-primary">30%</span></td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>Fix and squish bugs</td>
                                        <td>
                                        <div className="progress progress-xs progress-striped active">
                                            <div className="progress-bar bg-success" style={{width: '90%'}} />
                                        </div>
                                        </td>
                                        <td><span className="badge bg-success">90%</span></td>
                                    </tr>*/}
                                    </tbody>
                                </table>
                                </div>

									</div>
                               </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );

}
export default Masterstaff2;