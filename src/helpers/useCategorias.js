export async function getCategorias() {
  let response = await fetch('src/helpers/data/categorias.json');

  if(response.ok) {
    return await response.json();
  }
  throw new Error(`Response status: ${response.status}`);
}
