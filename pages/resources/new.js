import Layout from "@/components/Layout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const defaultData = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};

const ResourceCreate = () => {
  const [form, setForm] = useState(defaultData);
  const router = useRouter();
  const OnSubmitForm = () => {
    axios
      .post("/api/resources", form)
      .then(() => {
        router.push("/");
      })
      .catch((e) => {
        alert(e.response.data);
      });
  };

  const resetForm = () => {
    setForm(defaultData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add New Resource</h1>
              <form>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      value={form.title}
                      onChange={handleChange}
                      className="input"
                      name="title"
                      type="text"
                      placeholder="Learn Next Js"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      name="description"
                      onChange={handleChange}
                      value={form.description}
                      className="textarea"
                      placeholder="What is the wave here is the new text area"
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      name="link"
                      onChange={handleChange}
                      value={form.link}
                      className="input"
                      type="url"
                      placeholder="www.google.com"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name="priority"
                        value={form.priority}
                        onChange={handleChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time to finish</label>
                  <div className="control">
                    <input
                      name="timeToFinish"
                      value={form.timeToFinish}
                      onChange={handleChange}
                      className="input"
                      type="number"
                      placeholder="30 (time is in mins)"
                    />
                  </div>
                  <p className="help">Time in minutes</p>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button
                      type="button"
                      className="button is-link"
                      onClick={OnSubmitForm}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="button is-link is-light"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
