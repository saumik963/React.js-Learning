import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { blogsData } from "../blog_data";


export const Blog = () => {
  const { title } = useParams();
  const location = useLocation() // easiest way to access the title data with state
  const {body} = useLocation().state // destructuring data
  console.log(location)

  const navigate = useNavigate()

  // finding data from all data collection and filter data according to title
  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    const blogData = blogsData.filter((blog) => blog.title === title);
    setBodyData(blogData[0].body);
  }, []);


 
  return (
    <div>
      <h1>{title}</h1>
      <p>{bodyData.slice(0, 500)}</p>
      <h2>Access data using useLocation hook</h2>
      <p>{location.state.body.slice(0, 500)}</p>
      <p>{body}</p>

      <button onClick={() => navigate('/blogs')}>Back to Blog List</button>

    </div>
  );
};
