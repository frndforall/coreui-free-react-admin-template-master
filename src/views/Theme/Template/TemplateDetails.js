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
              meetupData:JSON.parse(JSON.stringify(result)),
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
                      <strong><i className="icon-info pr-1"></i>Meetup Name: {meetupData.title}</strong>
                    </CardHeader>
                    <CardBody>
                      
                        <img src={meetupData.image} width = '500' height = '250'></img><br/>
                        Description : {meetupData.description}<br/>
                        Short Info  : {meetupData.shortInfo} <br />
                        {/* Category    : {meetupData.category} */}
                        People Count: {meetupData.joinedPeopleCount}<br />
                      
                        Meetup From: {meetupData.timeFrom}<br />
                        Meetup To: {meetupData.timeTo}<br />
                        {/* <Card>

                           <strong> Category: {meetupData && meetupData.category && meetupData.category.name}</strong>

                        </Card> */}
                        {/* <MeetupUser category={meetupData.category}/> */}
                        {/* Category : {category.name} */}
                        {/* ({meetupData && meetupData.category && meetupData.category.name})?<MeetupUser category = {meetupData.category}/>:No Category; */}
                        <MeetupCategory category = {meetupData.category}/>
                        <MeetupUser user = {meetupData.meetupCreator}/>

                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          )

  }
    
}

function MeetupCategory(props) {
  return(
    <div>
      <strong>Category</strong>
      <Card>
        Name: {props.category && props.category.name}<br/>
        Created at: {props.category && props.category.createdAt}<br/>
      </Card>
    </div>
  );
}

function MeetupUser(props) {
  return(
    <div>
      <strong>User</strong>
      <Card>
        Category: {props.user && props.user.name}<br/>
        <img src={props.user && props.user.avatar} width = '500' height = '250'></img><br/>
      </Card>
    </div>
  );
}


export default TemplateDetails