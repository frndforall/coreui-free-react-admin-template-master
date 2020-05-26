// import React, { Component } from 'react';
import React, { useState, useEffect } from "react";
import { Card, CardImg, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
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
  
      <div className="animated fadeIn">
          {isLoading && meetupData.length ==0 ? 'Loading': 
              <Row>
                <Col lg={6}>
                  <Card>
                    <CardHeader>
                      <strong><i className="icon-info pr-1"></i>Meetup Name: {meetupData.title}</strong>
                    </CardHeader>
                    <CardBody>
                      
                        <CardImg src={meetupData.image} /><br/>
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
                }
            </div>
        
    )
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
        <CardImg src={props.user && props.user.avatar} /><br/>
      </Card>
    </div>
  );
}


export default MeetupDetails