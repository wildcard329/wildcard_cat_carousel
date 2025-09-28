// Example API: The Cat API (https://thecatapi.com/)
export async function getData(apiUrl) {
  try {
    const res = await fetch(apiUrl);
    return await res.json();
  } catch (err) {
    console.error("Error fetching cats:", err);
  }
}
