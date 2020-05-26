// import React, { Component } from 'react';
import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios'; 


function MeetupDetails(props)  {
    const id =props.match.params.id;
    const[meetupData,setMeetupData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      axios.get('http://localhost:3001/api/v1/meetups/'+id).then(response => response.data).then(  
        (result)=>{  
          var meta = JSON.parse(JSON.stringify(result));
          setMeetupData(meta);
          setIsLoading(false);
        },  
        (error)=>{  
            console.log(error);
        }  
      )
      },[]);

    return (
      // <div className="animated fadeIn">
      //   <Row>
      //     <Col lg={6}>
      //       <Card>
      //         <CardHeader>
      //           {/* <strong><i className="icon-info pr-1"></i>Item id: {this.props.params._id}</strong> */}
      //         </CardHeader>
      //         <CardBody>
      //             <Table responsive striped hover>
      //               <tbody>
      //                 {/* {
      //                   meetupData.map(([key, value]) => {
      //                     return (
      //                       <tr key={key}>
      //                         <td >{`${key}:`}</td>
      //                         <td ><strong>{value}</strong></td>
      //                       </tr>
      //                     )
      //                   })
      //                 } */}
      //               </tbody>
      //             </Table>
      //         </CardBody>
      //       </Card>
      //     </Col>
      //   </Row>
      // </div>
      <div className="animated fadeIn">
          {/* {isLoading ? 'Loading': 'LoadingComplete'} */}
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


// class MeetupDetails extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props.match.params.id);
//     this.state = {
//       meetupData: [],
//       isLoading: true
//     }
//   }

//   componentDidMount(){
//     this.loadMeetuData();
//     console.log(this.meetupData);
//   }

//   loadMeetuData() {
//     console.log('selected id is: '+this.props.match.params.id);
//     axios.get('http://localhost:3001/api/v1/meetups/'+this.props.match.params.id).then(response => response.data).then(  
//       (result)=>{  
//         console.log(result);
//           this.setState({  
//               meetupData:JSON.parse(JSON.stringify(result)),
//               isLoading: false
//           });  
//       },  
//       (error)=>{  
//           this.setState({error});  
//       }  
//   )  
//   }

//   render() {
//     // debugger;
//     const { meetupData, isLoading } = this.state;
  
//     // let category = JSON.parse(JSON.stringify(meetupData.category));
//     return (
//             <div className="animated fadeIn">
//               <Row>
//                 <Col lg={6}>
//                   <Card>
//                     <CardHeader>
//                       <strong><i className="icon-info pr-1"></i>Meetup Name: {meetupData.title}</strong>
//                     </CardHeader>
//                     <CardBody>
                      
//                         <img src={meetupData.image} width = '500' height = '250'></img><br/>
//                         Description : {meetupData.description}<br/>
//                         Short Info  : {meetupData.shortInfo} <br />
//                         {/* Category    : {meetupData.category} */}
//                         People Count: {meetupData.joinedPeopleCount}<br />
                      
//                         Meetup From: {meetupData.timeFrom}<br />
//                         Meetup To: {meetupData.timeTo}<br />
//                         {/* <Card>

//                            <strong> Category: {meetupData && meetupData.category && meetupData.category.name}</strong>

//                         </Card> */}
//                         {/* <MeetupUser category={meetupData.category}/> */}
//                         {/* Category : {category.name} */}
//                         {/* ({meetupData && meetupData.category && meetupData.category.name})?<MeetupUser category = {meetupData.category}/>:No Category; */}
//                         <MeetupCategory category = {meetupData.category}/>
//                         <MeetupUser user = {meetupData.meetupCreator}/>

//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>
//             </div>
//           )

//   }
    
// }

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


export default MeetupDetails