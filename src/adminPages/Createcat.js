import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Createcat() {
  const [num, setNum] = useState(0)
  const calnum = (e) => {
    if (num > 0) {
      alert('enter number')
    }
  }
  const handlenumchange = (e) => {
    setNum(e.target.value)
  }
  const [category, setCategory] = useState({
    categoryName: "",
    categoryId: "1",
  });
  const [storedcatData, setStoredcatdata] = useState([]);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("category"));
        if (data) {
            setStoredcatdata(data)
        }
    },[])
  const handleCategorySubmit = (event) => {
    event.preventDefault();
    if (category.categoryName) {
      alert(`Are you sure you want to create name ${category.categoryName}?`);
      console.log(category);
      // create a new categorydata
      const newCatdata = {
        categoryName: category.categoryName,
        categoryId: category.categoryId,
      };
      // push the new category data to the existing category data in the local Storage. Note that the local storage data is stored in a state called storedCatdata
        storedcatData.push(newCatdata);
      localStorage.setItem("category", JSON.stringify(storedcatData));
        
      alert("category Stored");

      // clear the form

      setCategory({
        categoryName: "",
        categoryId: (parseInt(category.categoryId) + 1).toString(), //increment
      });
    } else {
      alert("Please enter category name!!!");
    }

    // Add logic to handle the category submission, e.g., send it to an API
  };
    return (
      <div>
        <h3>CREATE CATEGORY</h3>
        <Form onSubmit={handleCategorySubmit}>
          <Row>
            <Col xs={7}>
              <Form.Label>Category name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category name"
                value={category.categoryName}
                onChange={(e) =>
                  setCategory((prev) => ({
                    ...prev,
                    categoryName: e.target.value,
                  }))
                }
              />
            </Col>
          </Row>
          <Button
            type="submit"
            className="adminBtncolor mt-3"
            style={{ backgroundColor: "#2a166f" }}
          >
            Submit
          </Button>
        </Form>
        <input type="number" value={num} onChange={setNum(handlenumchange)} />
        <button className="submitCal" onClick={calnum}>Submit</button>
      </div>
    );
}

export default Createcat;
