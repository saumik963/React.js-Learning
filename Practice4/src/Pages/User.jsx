import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export const User = () => {
  const { userId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("id"));
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name , age:age});
  };
  return (
    <div>

<h4>Practicing Query Parameters using ⇒ <code style={{color:"green"}}>useSearchParams</code></h4>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>

      <h1>userId get through <code style={{color:"green"}}>useParams</code> :{userId}</h1>
      <h1>{searchParams.get("id")}</h1>
      <h1>NAME: {searchParams.get("name")}</h1>
      <h1>AGE: {searchParams.get("age")}</h1>
    </div>
  );
};
