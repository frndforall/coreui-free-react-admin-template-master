// import React, { Component } from 'react';
import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios'; 


// function TemplateDetails(props)  {
//     // const item = itemsData.find( item => item.id.toString() === this.props.match.params.id)

//     // const itemDetails = item ? Object.entries(item) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]


//     const[meetupData,setMeetupData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
    

//     useEffect(() => {
//         fetch(
//           `http://10.0.2.2:3001/api/v1/meetups/${props._id}`,
//           {
//             method: "GET",
//           }
//         ).then(res => res.body)
//         .then(response => {
//           console.log(response.item.description);
//           setMeetupData(response.item)
//           setIsLoading(false);
//         })
//         .catch(error => console.log(error));
//       });

//     return (
//       <div className="animated fadeIn">
//         <Row>
//           <Col lg={6}>
//             <Card>
//               <CardHeader>
//                 {/* <strong><i className="icon-info pr-1"></i>Item id: {this.props.params._id}</strong> */}
//               </CardHeader>
//               <CardBody>
//                   <Table responsive striped hover>
//                     <tbody>
//                       {
//                         meetupData.map(([key, value]) => {
//                           return (
//                             <tr key={key}>
//                               <td >{`${key}:`}</td>
//                               <td ><strong>{value}</strong></td>
//                             </tr>
//                           )
//                         })
//                       }
//                     </tbody>
//                   </Table>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     )
//   }


class TemplateDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
    this.state = {
      meetupData: [],
      isLoading: true
    }
  }

  componentDidMount(){
    this.loadMeetuData();
    console.log(this.meetupData);
  }

  loadMeetuData() {
    console.log('selected id is: '+this.props.match.params.id);
    axios.get('http://localhost:3001/api/v1/meetups/'+this.props.match.params.id).then(response => response.data).then(  
      (result)=>{  
        console.log(result);
          this.setState({  
              meetupData:result, 
              isLoading: false
          });  
      },  
      (error)=>{  
          this.setState({error});  
      }  
  )  
  }

  render() {
    const { meetupData, isLoading } = this.state;
    return (
            <div className="animated fadeIn">
              <Row>
                <Col lg={6}>
                  <Card>
                    <CardHeader>
                      {/* <strong><i className="icon-info pr-1"></i>Item id: {this.props.params._id}</strong> */}
                    </CardHeader>
                    <CardBody>
                        <Table responsive striped hover>
                         
                          <tbody>
                            {
                              meetupData.map(([key, value]) => {
                                return (
                                  <tr key={key}>
                                    <td >{`${key}:`}</td>
                                    {/* if(value.isArray) {
                                      <td> Array of values</td>
                                    } else {
                                      <td ><strong>{value}</strong></td>
                                    } */}
                                
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

export default TemplateDetails