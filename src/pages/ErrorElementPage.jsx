import { NavLink, useRouteError } from "react-router";
import { useEffect } from "react";

export default function ErrorElementPage() {
  const error = useRouteError();
  useEffect(() => {
    document.title = "Error | SO BOLD";
  });

  return (
    <section className="notfound">
      <h1>{error?.message ? error.message : "Unknown Error Occured"}</h1>
      <h1>{error?.status ? error.status : null}</h1>
      <h1>{error?.statusText ? error.statusText : null}</h1>
      <NavLink to="/" className="return-home-link">
        Go back to Home
      </NavLink>
    </section>
  );
}
