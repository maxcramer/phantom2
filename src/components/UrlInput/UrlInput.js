import React from "react";
import { useForm } from "react-hook-form";

import "./UrlInput.css";

function UrlInput({ onSubmit, setUrl, url }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Url Checker</h1>

          <input
            name="url"
            type="url"
            placeholder="enter url"
            value={url}
            className="text_input"
            id="input"
            onChange={(e) => setUrl(e.target.value)}
          />
          <input type="submit" value="Submit" className="submit_btn" />
        </form>
      </section>
    </React.Fragment>
  );
}

export default UrlInput;
