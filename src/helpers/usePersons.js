export async function getPersons() {
  let response = await fetch('src/helpers/data/personas.json');

  if(response.ok) {
    return await response.json();
  }
  throw new Error(`Response status: ${response.status}`);
}
