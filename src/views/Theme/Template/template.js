import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios'; 

// import itemsData from './ItemData'

const apiUrl = 'http://localhost:3001/api/v1/meetups'; 


function UserRow(props) {
  const item = props.item
  const itemLink = `/items/${item.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    // <tr key={item.id.toString()}>
    //   <th scope="row"><Link to={itemLink}>{item.id}</Link></th>
    //   <td><Link to={itemLink}>{item.name}</Link></td>
    //   <td>{item.registered}</td>
    //   <td>{item.type}</td>
    //   <td><Link to={itemLink}><Badge color={getBadge(item.status)}>{item.status}</Badge></Link></td>
    // </tr>
        <td>
            <Card>
              <CardHeader>
                  Item Id: <Link to={itemLink}>{item.title}</Link>
              </CardHeader>
              <CardBody>
               Item Name: <Link to={itemLink}>{item.description}</Link><br/>
              Item Registered: {item.createdAt}<br/>
              Item From: {item.from}<br/>
              Item to: {item.to}<br/>


              {/* Item Status: <Link to={itemLink}><Badge color={getBadge(item.status)}>{item.status}</Badge></Link> */}
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
            </td>
  )
}

class Template extends Component {

    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           users:[],  
           response: {}  
              
        }  
    }  
  
    componentDidMount(){  
       axios.get(apiUrl).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    users:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  

    
  render() {

    // const itemList = itemsData.filter((item) => item.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={20}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  {/* <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">type</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead> */}
                  <tbody>
                    <tr>
                    {this.state.users.map((item, index) =>
                      <UserRow key={index} item={item}/>
                    )}
                    </tr>
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

export default Template;
