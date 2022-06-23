import React from "react";
import { useForm } from "react-hook-form";

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
        <h1>Url Checker</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              name="url"
              type="url"
              placeholder="enter url"
              value={url}
              className="form-control"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}

export default UrlInput;
