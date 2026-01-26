// const url = "https://demo.veyondtech.com/wp-json/wp/v2/posts";
const url = "https://demo.veyondtech.com/wp-json/wp/v2/posts?_embed";
const PER_PAGE = 2;

// word press functinality , page, per_page, X-WP-TotalPages

export async function NewsListLoader({ params, request }) {
  const id = params.id;

  // pagination functinality
  // let requestUrl = new URL(url);

  // if (id) {
  //   requestUrl.searchParams.set("categories", id);
  // }

  // // pagination with query parameters
  // const page = new URL(request.url).searchParams.get("page") || 1;
  // requestUrl.searchParams.set("page", page);
  // requestUrl.searchParams.set("per_page", PER_PAGE);

  // const res = await fetch(requestUrl);

  // if (!res.ok) {
  //   const error = new Error("Failed to fetch category posts pagination");
  //   error.status = res.status;
  //   error.statusText = res.statusText;
  //   throw error;
  // }

  // // finding total page and articles
  // const totalPages = Number(res.headers.get("X-WP-TotalPages"));
  // const posts = await res.json();

  // return {
  //   posts,
  //   totalPages,
  //   currentPage: Number(page),
  // };

  //View more functionality
  let requestUrl = url;

  if (id) {
    requestUrl = `${url}?categories=${id}`;
  }

  let res = await fetch(requestUrl);
  if (!res.ok) {
    const error = new Error("Failed to fetch category posts view more");
    error.status = res.status;
    error.statusText = res.statusText;
    throw error;
  }

  res = await res.json();

  // console.log("NewsList loader : ", res);
  // console.log("NewsList loader : ", res.length);

  return res;
}
