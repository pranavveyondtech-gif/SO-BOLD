import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    document.title = "Serivces | SO BOLD";
  }, []);
  return (
    <section className="page">
      <h2>Services Page</h2>
    </section>
  );
}
