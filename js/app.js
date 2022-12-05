function handleSearch() {
  const pokemon = document.querySelector("#pokemon").value
  const name = document.querySelector('.name')
  const image = document.querySelector(".icon")
  const types = document.querySelector(".types")
  const stats = document.querySelector('.stats')
  const api = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => response.json())
    .then((data) => {
      name.innerText = `${data.name}`
      image.src = `${data.sprites.front_default}`
      if (data.types[1]) {
        types.innerText = `${data.types[0].type.name} / ${data.types[1].type.name}`
      } else {
        types.innerText = `${data.types[0].type.name}`
      }
      const stat1 = data.stats[0]
      const stat2 = data.stats[1]
      const stat3 = data.stats[2]
      const stat4 = data.stats[3]
      const stat5 = data.stats[4]
      const stat6 = data.stats[5]
      stats.innerHTML = `<li>${stat1.stat.name} - ${stat1.base_stat}</li><li>${stat2.stat.name} - ${stat2.base_stat}</li><li>${stat3.stat.name} - ${stat3.base_stat}</li><li>${stat4.stat.name} - ${stat4.base_stat}</li><li>${stat5.stat.name} - ${stat5.base_stat}</li><li>${stat6.stat.name} - ${stat6.base_stat}</li>`
    });



}
