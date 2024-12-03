import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { CardImg, CardText } from "react-bootstrap";
function CreatePost() {

    const [category, setCategory] = useState(
      JSON.parse(localStorage.getItem("category")) || []
    );
      const [postData, setPostData] = useState({
        title: "",
        author: "",
        date: "",
        category: "",
        postImage: null,
        content: "",
      });
  const [storedData, setStoredData] = useState(
    JSON.parse(localStorage.getItem("postData")) || []
    );
    
  const handlePostSubmit = (event) => {
    event.preventDefault();
    const existingPostData = JSON.parse(localStorage.getItem("postData")) || [];
    const updatedData = [
      ...existingPostData,
      { ...postData, imageUrl: imagePreview }, // Assuming you want to save the Base64/Blob URL
    ];
    localStorage.setItem("postData", JSON.stringify(updatedData));
    alert("Data saved to local storage!!");
    //Reset form data and image preview
    setPostData({
      title: "",
      author: "",
      date: "",
      category: "",
      content: "",
    });
    setImagePreview(null);
    setStoredData(updatedData); // This will also trigger a re-render
  };

  const [imagePreview, setImagePreview] = useState(null); // State to hold the image preview URL
  // Handle input changes for post data
  const handlePostChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "postImage" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the preview URL
      };
      reader.readAsDataURL(file); // Convert to Base64 URL
    } else {
      setPostData({ ...postData, [name]: value });
    }
  };

    return (
      <div>
        <h3>Create a Post</h3>
        <Form className="formdata mt-3" onSubmit={handlePostSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={postData.title}
                onChange={handlePostChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author's name"
                name="author"
                value={postData.author}
                onChange={handlePostChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={postData.date}
                onChange={handlePostChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>Category</Form.Label>

              <Form.Select
                name="category"
                value={postData.category}
                onChange={handlePostChange}
              >
                <option value="">Choose category</option>
                {category.map((items, index) => {
                  return (
                    <option value={items.categoryName}>
                      {items.categoryName}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPostImage">
              <Form.Label>Post image</Form.Label>

              <Form.Control
                type="file"
                name="postImage"
                onChange={handlePostChange}
              />
            </Form.Group>
          </Row>
          <Row className="">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: "100px", height: "auto" }}
              />
            )}
          </Row>

          <Form.Group className="mb-3" controlId="formGridContent">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="content"
              value={postData.content}
              onChange={handlePostChange}
            />
          </Form.Group>

          <Button
            type="submit"
            className="adminBtncolor mt-3"
            style={{ backgroundColor: "#2a166f" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
}

export default CreatePost;
