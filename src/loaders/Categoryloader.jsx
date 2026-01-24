const url = "https://demo.veyondtech.com/wp-json/wp/v2/categories";

export async function categoryLoader() {
  let res = await fetch(url);

  if (!res.ok) {
    const error = new Error("Failed to fetch categories");
    error.status = res.status;
    error.statusText = res.statusText;
    throw error;
  }

  res = await res.json();

  //   console.log("category loader : ", res);

  return res;
}
