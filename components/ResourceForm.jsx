import { useState } from "react";

const defaultData = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};

const ResourceForm = ({ onSubmit, update = false, data = defaultData }) => {
  const [form, setForm] = useState(data);

  const resetForm = () => {
    setForm(data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onFormSubmit = () => {
    onSubmit(form);
  };
  return (
    <div className="resource-form">
      <h1 className="title">{update ? "Update " : "Add New "} Resource</h1>
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
              onClick={onFormSubmit}
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
  );
};

export default ResourceForm;
