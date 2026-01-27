import { useEffect } from "react";

export default function StartProject() {
    useEffect(() => {
      document.title = "Start Project | SO BOLD";
    }, []);
  return (
    <div className="page">
      <h1>Start A Project</h1>
    </div>
  );
}
