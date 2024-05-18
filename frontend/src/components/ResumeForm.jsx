function ResumeForm({ submitResume, resume }) {
  return (
    <form onSubmit={(e) => submitResume(e)}>
      <h2>Paste your resume</h2>
      <textarea rows="6" type="text" name="resume" />
      <button>Submit</button>
    </form>
  );
}

export default ResumeForm;
