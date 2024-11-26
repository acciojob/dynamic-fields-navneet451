
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([{ id: Date.now(), name: "", age: "" }]);
  
  const handleAddField = () => {
    setFields([...fields, { id: Date.now(), name: "", age: "" }]);
  };
  
  const handleRemoveField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleInputChange = (id, event) => {
    const { name, value } = event.target;
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, [name]: value } : field
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", fields);
  };
  
  
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic Form</h1>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleInputChange(field.id, e)}
              style={{ marginRight: "10px" }}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleInputChange(field.id, e)}
              style={{ marginRight: "10px" }}
            />
            <button
              type="button"
              onClick={() => handleRemoveField(field.id)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddField}>
          Add Field
        </button>
        <button type="submit" style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App
