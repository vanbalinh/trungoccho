import React, { Component } from 'react'
import { connect } from 'react-redux';

class ListUser extends Component {

  renderUser = () => {
    return this.props.userInfo.map((user, index) => {
      return <tr key={index}>
        <th scope="row">{user.id}</th>
        <td>{user.userLogin}</td>
        <td>{user.userName}</td>
        <td>{user.passWord}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.userRole}</td>
      </tr>
    })
  }
  render() {
    console.log('list user:', this.props.userInfo)
    return (
      <div className="row">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">User login</th>
                <th scope="col">User name</th>
                <th scope="col">Password</th>
                <th scope="col">Email</th>
                <th scope="col">Phone number</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {this.renderUser()}
            </tbody>
          </table>
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userInfo: state.RegistationFormReducer.userInfo
  }
}

export default connect(mapStateToProps)(ListUser)