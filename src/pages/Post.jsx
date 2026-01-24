import { useLoaderData } from "react-router";
import "./post.css";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const navigate = useNavigate();
  const post = useLoaderData();

  return (
    <section className="post-container">
      <button className="btn-back" onClick={() => navigate(-1)}>
        BACK
      </button>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

      <div className="post-excerpt">
        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </div>
    </section>
  );
}
