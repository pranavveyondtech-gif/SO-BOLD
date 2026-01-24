const url = "https://demo.veyondtech.com/wp-json/wp/v2/posts";
export async function PostLoader({ params }) {
  const postID = params.postid;

  let res = await fetch(`${url}/${postID}`);

  if (!res.ok) {
    // console.log("post ", res);
    const error = new Error("Failed to fetch posts");
    error.status = res.status;
    error.statusText = res.statusText;
    throw error;
  }
  res = await res.json();
  console.log("post ", res);

  return res;
}
