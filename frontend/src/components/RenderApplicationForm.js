import React from "react";

const RenderApplicationForm = () => {
  const submitApplication = async (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <h2>Application Form</h2>
      <form onSubmit={submitApplication}>
        <label>Name:</label>
        <input type="text" name="name" required />

        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Phone:</label>
        <input type="tel" name="phone" required />

        <label>Resume or CV:</label>
        <input type="file" name="cv" required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default RenderApplicationForm;
