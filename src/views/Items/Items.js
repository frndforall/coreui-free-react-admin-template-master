import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import itemsData from './ItemData'

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
                  Item Id: <Link to={itemLink}>{item.id}</Link>
              </CardHeader>
              <CardBody>
               Item Name: <Link to={itemLink}>{item.name}</Link><br/>
              Item Registered: {item.registered}<br/>
              Item Status: <Link to={itemLink}><Badge color={getBadge(item.status)}>{item.status}</Badge></Link>
                {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. */}
              </CardBody>
            </Card>
            </td>
  )
}

class Items extends Component {

  render() {

    const itemList = itemsData.filter((item) => item.id < 10)

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
                    {itemList.map((item, index) =>
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

export default Items;
