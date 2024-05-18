import { useState } from "react";
import "./App.css";
import axios from "axios";

// import ResumeForm from "./components/ResumeForm.jsx";

function App() {
  const [response, setResponse] = useState("");
  const [resume, setResume] = useState("");

  const submitResume = (e) => {
    e.preventDefault();

    setResume(e.target.resume.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let form = new FormData(e.target);
    let formObject = Object.fromEntries(form.entries());
    formObject.resume = resume;
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
    <div className="container min-h-screen bg-gray-800">
      <h1 className="text-3xl text-white font-bold m-2">
        Welcome to the cover letter generator
      </h1>

      <form className="flex flex-col " onSubmit={(e) => submitResume(e)}>
        <h2 className="text-white font-bold m-2">Paste your resume</h2>
        <textarea
          className="rounded-lg p-4 w-full bg-gray-500 text-gray-300"
          rows="6"
          type="text"
          name="resume"
        />
        <button className="rounded-lg m-2 p-2 bg-orange-500">Submit</button>
      </form>

      <form className="flex flex-col" onSubmit={(e) => submitForm(e)}>
        <h2 className=" text-white font-bold m-2">Paste a job description</h2>
        <textarea
          className="rounded-lg p-4 bg-gray-500 text-gray-300 "
          rows="6"
          type="text"
          name="prompt"
        />
        <button className="rounded-lg m-2 p-2 bg-green-500">Submit</button>
        <div className="text-white">{response}</div>
      </form>
    </div>
  );
}

export default App;
