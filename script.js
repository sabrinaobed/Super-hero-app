//https://superheroapi.com/api/access-token/character-id
//onst BaseURL = 'https://akabab.github.io/superhero-api/api/id';
const BaseURL2 = 'https://www.superheroapi.com/api.php/5553917778056234';
const newHeroButton = document.getElementById('newHeroButton')
const heroImageDiv = document.getElementById('heroImage')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')

const getSuperHero = (id, name) => {
  //name: base_url/search/batman
  //json.results[0].image.url
  
  //id: base_url/id
  //json.image.url
  
  fetch(`${BaseURL2}/${id}`)
  //fetch('https://superheroapi.com/api/5553917778056234/245')
  .then(response => response.json())
  .then(json => {
    console.log(json.powerstats)
    const superHero = json
    showHeroInfo(superHero)
  })
}

const statToEmoji = {
  intelligence:'🧠',
  strength:'💪',
  speed:'⚡',
  durability:'🏋',
  power:'📊',
  combat:'⚔️'
}


const showHeroInfo= (character) => {
    const name = `<h2>${character.name}</h2>`
   const img =`<img src="${character.image.url}" height = 200 width= 200/>`
  
const stats = Object.keys(character.powerstats).map(stat => {
  return`<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
}).join('')
  

  heroImageDiv.innerHTML = `${name}${img}${stats}`
  //return stats.join('')
}


const getSearchsuperHero = (name) => {
  console.log(searchInput.value)
  fetch(`${BaseURL2}/search/${name}`)
  .then(response => response.json())
  .then(json => {
    const hero = json.results[0]
   showHeroInfo(hero)
  
  })
}

const randomHero = () => {
  const numberOfHeros= 731
  return Math.floor(Math.random()* numberOfHeros +1)
}
newHeroButton.onclick = () => getSuperHero(randomHero())
searchButton.onclick = () => getSearchsuperHero(searchInput.value)




