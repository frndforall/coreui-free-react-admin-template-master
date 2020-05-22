import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import itemsData from './ItemData'

function UserRow(props) {
  const item = props.item
  const itemLink = `/users/${item.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={item.id.toString()}>
      <th scope="row"><Link to={itemLink}>{item.id}</Link></th>
      <td><Link to={itemLink}>{item.name}</Link></td>
      <td>{item.registered}</td>
      <td>{item.type}</td>
      <td><Link to={itemLink}><Badge color={getBadge(item.status)}>{item.status}</Badge></Link></td>
    </tr>
  )
}

class Items extends Component {

  render() {

    const itemList = itemsData.filter((item) => item.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">type</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemList.map((item, index) =>
                      <UserRow key={index} item={item}/>
                    )}
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
