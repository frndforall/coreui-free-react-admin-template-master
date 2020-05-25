import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'

class User extends Component {


  constructor(props) {
    super(props);
    this.user = usersData.find( user => user.id.toString() === this.props.match.params.id)

    this.userDetails = this.user ? Object.entries(this.user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]
  }  

  componentDidMount() {
    console.log(this.user);
    console.log(this.userDetails);
}


  render() {
   
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        this.userDetails.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User;
