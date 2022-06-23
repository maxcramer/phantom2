import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function UrlInput() {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (localStorage.getItem("localUrls")) {
      const storedList = JSON.parse(localStorage.getItem("localUrls"));
      setUrls(storedList);
    }
  }, [setUrls]);

  const onSubmit = (e) => {
    console.log("Running onSubmit");
    if (url) {
      const newUrl = {
        id: new Date().getTime().toString(),
        title: url,
      };
      setUrls([...urls, newUrl]);
      localStorage.setItem("localUrls", JSON.stringify([...urls, newUrl]));
      setUrl("");
    }
  };

  const handleDelete = (url) => {
    const deleted = urls.filter((u) => u.id !== url.id);
    console.log("deleted: ", deleted);
    setUrls(deleted);
    localStorage.setItem("localUrls", JSON.stringify(deleted));
    console.log("running");
  };

  const handleClear = () => {
    setUrls([]);
    localStorage.removeItem("localUrls");
  };

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
              //   {...register("url", {
              //     required: {
              //       value: true,
              //       message: "Url is required",
              //     },
              //     // pattern: {
              //     //   value: /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/,
              //     //   message: "Please enter a valid URL",
              //     // },
              //   })}
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
            {/* <button onClick={addUrl}>Submit</button> */}
          </div>
          {/* {errors.url && <span>{errors.url.message}</span>} */}
        </form>
      </section>
      <section>
        <div>
          <ul>
            {urls.map((url) => (
              <li className="url_item" key={url.id}>
                <a href={url.title}>{url.title}</a>
                <div className="validation_delete">
                  <img
                    className="image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png"
                    alt="Validated URL"
                    title="Validated"
                  />
                  <button
                    type="button"
                    id="delete-item_btn"
                    title="Delete Item"
                    onClick={() => handleDelete(url)}
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {!urls.length ? null : (
          <div>
            <button onClick={() => handleClear()}>Clear All</button>
          </div>
        )}
      </section>
    </React.Fragment>
  );
}

export default UrlInput;
