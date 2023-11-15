export async function fetchImages() {
  const res = await fetch('/data/product-category.json');
  if (!res.ok) throw new Error('Noetwork reponse was not ok');
  const data = res.json();
  return data;
}
