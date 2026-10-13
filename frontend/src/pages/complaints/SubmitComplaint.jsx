import { useState } from "react";

export default function SubmitComplaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // TODO: oya: attachment file state eka hadanna (useState null)

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: validation: title & description empty da? alert daapala return karanna
    console.log({ title, description }); // Week 2 eke meka POST /api/complaints walata yawanawa
    alert("Complaint submitted (mock)!");
  };

  return (
    <div style={{ maxWidth: 480, margin: "40px auto" }}>
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Short title..."
          style={{ width: "100%", padding: 8, marginBottom: 12 }}
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the issue..."
          rows={4}
          style={{ width: "100%", padding: 8, marginBottom: 12 }}
        />

        {/* TODO: oya: <input type="file" /> add karanna */}

        <button type="submit" style={{ padding: "10px 20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}