import { useState } from "react";
import "./App.css";
import axios from "axios";

import ResumeForm from "./components/ResumeForm.jsx";

function App() {
  const [response, setResponse] = useState("");
  const [resume, setResume] = useState("");

  const submitResume = async (e) => {
    e.preventDefault();
    setResume(e.target.value);
    console.log(e.target.value);

    console.log(resume);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let form = new FormData(e.target);
    let formObject = Object.fromEntries(form.entries());
    console.log(formObject);

    const { data } = await axios.post(
      "http://localhost:4000/prompt",
      formObject,
    );

    if (data.error) {
      setResponse(data.error);
      return;
    } else {
      setResponse(data);
    }
  };

  return (
    <div className="container">
      {/* <h1 className="text-3xl font-bold m-2">
        Welcome to the cover letter generator
      </h1> */}

      {/* <form onSubmit={(e) => submitResume(e)}>
        <h2>Paste your resume</h2>
        <textarea rows="6" type="text" name="resume" />
        <button>Submit</button>
      </form> */}

      <form className="flex flex-col" onSubmit={(e) => submitForm(e)}>
        <h2 className="text-3xl font-bold m-2">Paste a job description</h2>
        <textarea className="p-4" rows="6" type="text" name="prompt" />
        <button className="m-2 p-2 bg-green-100">Submit</button>
        <div className="response">{response}</div>
      </form>
    </div>
  );
}

export default App;
