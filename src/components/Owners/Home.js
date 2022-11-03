import React from "react";
import School from "./Schools";
import Student from "./Students";
import Educator from "./Educators";


function Home() {
  return (
   <div className="App">
      <Educator />
      <School />
      <Student />
      </div>
  );
}

export default Home;
