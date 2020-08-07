// https://swapi.dev/documentation

// #region Setup
const URL = "http://swapi.dev/api/";
const output = document.getElementById("output");
const spinner = document.getElementById('spinner');

output.innerHTML = "Loading ...";
//#endregion

fetch(URL + 'filmsfsd')
  .then(res => {
    if (!res.ok) {
      throw Error('Error')
    }
    return res.join();
  })
  .then(({results: films}) => {
    output.innerHTML = getTitles(films);
  })

function getTitles(films) {
  return films
            .sort((a, b) => a.episode_id - b.episode_id)
            .map(film => `<div>${film.episode_id} ${film.title}</div>`)
            .join('')
}