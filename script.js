const API = "https://pokeapi.co/api/v2/pokemon"

Promise.all([,])

        fetch(API) 
        .then( json => json.json())
        .catch(error =>  console.log(error))


        .then(data => {
            
            const  { results } = data
            // console.log(results)
            
            results.forEach(pokemon => {

                card = ""
                
                const personaje = {
                    nombre:pokemon.name,
                    id:"",
                    altura:"",
                }
                // console.log(pokemon.name)
                
                fetch(pokemon.url)
                .then(json => json.json())
                .catch( error => error)
                
                .then(pokemonInfo =>{                    
                    personaje.id = pokemonInfo.id
                    personaje.altura = pokemonInfo.height
                    
                    let render =  createTemplate(personaje) 
            //   console.log(render)

              card += render

                })
                .catch( error => error)
                
                
                
            });
            
            console.log(card)
        }


        )
        .catch(error => console.log(error))
        // let param = "?offset=${}&limit=20"


        function createTemplate (object){
         return ` <h2>${object.nombre}</h2>
                    <p>${object.id}</p>
                    <p>${object.altura}</p> `           

            }
            

        
function imprimirHtml(container,template){
    container.innerHTML =template
}