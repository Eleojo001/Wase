import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { CardImg, CardText } from "react-bootstrap";
import Createcat from "./Createcat";
import CreatePost from "./CreatePost";
function Viewpost() {
    const [storedData, setStoredData] = useState( []);  
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("postData"));
            setStoredData(data);
            
        
    },[])
  return (
    <div>
      <div className="adcardgrid">
        {storedData.length === 0 ? (
          <p>No posts yet</p>
        ) : (
          storedData.map((item) => (
            <div className="">
              <Card key={item.id}>
                <Card.Img
                  variant="top"
                  src={item.imageUrl || "holder.js/100px180"}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text></Card.Text>
                  <Card.Text>
                    {item.author} <br />
                    {item.category} <br />
                    {item.content}
                    {item.date} <br />
                  </Card.Text>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Viewpost