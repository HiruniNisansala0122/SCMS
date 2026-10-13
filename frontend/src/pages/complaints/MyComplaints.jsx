import complaints from "../../mocks/complaints.json";

export default function MyComplaints() {
  return (
    <div style={{ maxWidth: 640, margin: "40px auto" }}>
      <h2>My Complaints</h2>
      {complaints.map((c) => (
        <div key={c.id} style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, marginBottom: 12 }}>
          <h3>{c.title}</h3>
          <p>{c.description}</p>
          <small>
            {c.category} · {c.priority} · <b>{c.status}</b>
          </small>
        </div>
      ))}
    </div>
  );
}