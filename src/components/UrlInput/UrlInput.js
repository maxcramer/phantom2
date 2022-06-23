import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function UrlInput() {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      url: "https://www.",
    },
  });

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

  const handleDelete = (urls) => {
    const deleted = urls.filter((u) => u.id !== url.id);
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
              //   className="form-control"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
          {errors.url && <span>{errors.url.message}</span>}
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
                    onClick={() => handleDelete(url.id)}
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
