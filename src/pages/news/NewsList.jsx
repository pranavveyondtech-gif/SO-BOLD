import { useState, useEffect } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router";

export default function NewsList() {
  useEffect(() => {
    document.title = "News & Blogs | SO BOLD";
  });

  // View more functionality
  // const articles = useLoaderData();
  // const [visibleCount, setVisibleCount] = useState(4);
  // const visibleArticles = articles.slice(0, visibleCount);

  // pagination functionality
  const { posts, totalPages, currentPage } = useLoaderData();
  const navigate = useNavigate();

  function goToPage(page) {
    navigate(`?page=${page}`);
  }

  return (
    <section>
      {/* pagination functionality  */}

      <div className="article-list">
        {posts.map((article) => (
          <ArticleCard key={article.id} data={article} />
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          Prev
        </button>
        <span>
          Showing Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      </div> 

      {/* view more functionality */}
      {/* <div className="article-list">
        {visibleArticles.map((article) => (
          <ArticleCard key={article.id} data={article} />
        ))}
      </div>

      <div className="view-more-wrapper">
        <button
          disabled={visibleCount <= 4}
          onClick={() => setVisibleCount((e) => e - 2)}
          className="view-more-btn"
        >
          View Less
        </button>
        <button
          disabled={visibleCount >= articles.length}
          onClick={() => setVisibleCount((e) => e + 2)}
          className="view-more-btn"
        >
          View More
        </button>
      </div> */}
    </section>
  );
}

function ArticleCard({ data }) {
  // console.log(data._embedded?.["wp:term"]?.[0]?.[0]?.name);
  return (
    <NavLink to={`/post/${data.id}`}>
      <div className="article-card">
        <div className="article-img">
          <img
            style={{ borderRadius: "7px" }}
            src={
              data._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes
                ?.thumbnail?.source_url || null
            }
            alt="img"
          />
        </div>

        <div className="article-info">
          <div className="article-categories">
            <span>{data?.primaryTag || "News"}</span>
            {data._embedded?.["wp:term"]?.[0]?.map((category) => (
              <span key={category.id} className="article-badge">
                {category.name}
              </span>
            ))}
          </div>

          {/* <h3 className="article-title">
            {data?.title?.rendered || "No Title"}
          </h3> */}

          <h3
            className="article-title"
            dangerouslySetInnerHTML={{
              __html: data.title.rendered,
            }}
          />

          {/* <div>{data?.readTime || "No Read Time"}</div> */}
        </div>
      </div>
    </NavLink>
  );
}
