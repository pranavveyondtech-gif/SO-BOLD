import { useLoaderData } from "react-router";
import "../assets/css/Post.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Post() {
  const navigate = useNavigate();
  const post = useLoaderData();

  useEffect(() => {
    document.title = `${post.title.rendered} | SO BOLD`;
  }, [post.title.rendered]);

  return (
    <section>
      <div className="post-hero">
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        <div>
          <img
            style={{ borderRadius: "20px" }}
            src={
              post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes
                ?.medium?.source_url || null
            }
            alt="img"
          />
        </div>
      </div>

      <div className="post-container">
        <button className="btn-back" onClick={() => navigate(-1)}>
          BACK
        </button>

        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

        <div className="post-excerpt">
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
      </div>
    </section>
  );
}
