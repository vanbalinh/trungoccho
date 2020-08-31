import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/RegistationForm.css';
import { connect } from 'react-redux';
import { addUserAction } from '../redux/action/RegisterAction';

class RegistationForm extends Component {

    state = {
        user: {
            userLogin: '',
            userName: '',
            passWord: '',
            email: '',
            phoneNumber: '',
            userRole: ''
        }
    }

    handleChange = (event) => {
        let { value, name } = event.target;
        let newValue = { ...this.state.user, [name]: value }
        this.setState({
            user: newValue
        })
    }

    handleSubmit = (event) => {
        const { user } = this.state;
        this.props.dispatch(addUserAction(user))
        event.preventDefault();
    }



    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit} style={{ fontSize: 'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif' }} className=" bg-white p-5 m-5 w-100" >
                    <h1 className="text-center mt-0 mb-5">User Profile</h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.user.userLogin} type="text" name="userLogin" onChange={this.handleChange} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>User Login</label>
                                <span className="text text-danger"></span>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.user.userName} type="text" name="userName" onChange={this.handleChange} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>User Name</label>
                                <span className="text text-danger"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.user.passWord} type="password" name="passWord" onChange={this.handleChange} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password</label>
                                <span className="text text-danger"></span>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.user.phoneNumber} type="text" name="phoneNumber" onChange={this.handleChange} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Phone Number</label>
                                <span className="text text-danger"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.user.email} type="text" name="email" onChange={this.handleChange} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Email</label>
                                <span className="text text-danger"></span>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="group">
                                <select value={this.state.user.userRole} name="userRole" onChange={this.handleChange}>
                                    <option>Admin</option>
                                    <option>Client</option>
                                </select>
                                <span className="text text-danger"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row ml-1">
                        <button type="submit" className="btn btn-success mr-4">Submit</button>
                        <button className="btn btn-secondary">Update</button>
                    </div>
                </form>
            </div>
        )
    }






    // }
    // }
}
const mapStateToProps = (state) => {
    return {
        user: state.RegistationFormReducer.user
    }
}


export default connect(mapStateToProps)(RegistationForm)