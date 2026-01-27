import { useEffect } from "react";

export default function Work() {
  useEffect(() => {
    document.title = "Work | SO BOLD";
  }, []);
  return (
    <section className="page">
      <h2>Work Page</h2>
    </section>
  );
}
