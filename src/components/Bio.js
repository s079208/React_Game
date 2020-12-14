import React from "react";

export default function Biografie({ title, Bio }) {
  return (
    <section className="Biografie">
      <h1>{title}</h1>
      {Bio.map((s, i) => (
        <p key={i}>{s}</p>
      ))}
    </section>
  );
}
