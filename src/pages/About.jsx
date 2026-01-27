import { useEffect } from "react";

export default function About() {
  useEffect(() => {
      document.title = "About | SO BOLD";
    });
  return (
    <section className="page">
      <h2>About Page</h2>
    </section>
  );
}
