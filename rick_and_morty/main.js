async function request_data(url){
    let promise  = await fetch(url);
    let data = await promise.json();
    return data;
}

async function get_seasons() {
    let data = await request_data(`https://rickandmortyapi.com/api/episode/?episode=E01`);
    for (let i = 0; i < data.info.count; i++) {
        season_select.innerHTML += `<option value="${data.results[i].episode.split('')[0]}${data.results[i].episode.split('')[1]}${data.results[i].episode.split('')[2]}">${data.results[i].episode.split('')[0]}${data.results[i].episode.split('')[1]}${data.results[i].episode.split('')[2]}</option>`;
    }
}

async function get_episodes(season) {
    let data = await request_data(`https://rickandmortyapi.com/api/episode/?episode=S${season}`);
    for (let i = 0; i < data.info.count; i++) {
        episode_select.innerHTML += `<option class="episode_card" value="S${season}${data.results[i].episode.split('')[3]}${data.results[i].episode.split('')[4]}${data.results[i].episode.split('')[5]}">${data.results[i].episode.split('')[3]}${data.results[i].episode.split('')[4]}${data.results[i].episode.split('')[5]} ${data.results[i].name}</option>`;
    }
}

async function gen_characters(full_episode) {
    let data = await request_data(`https://rickandmortyapi.com/api/episode/?episode=${full_episode}`);
    for (let i = 0; i < data.results[0].characters.length; i++) {
        let character_data = await request_data(data.results[0].characters[i]);
        console.log(character_data);
        document.querySelector('.characters').innerHTML += 
        `<div id="${character_data.id}" class="card">
            <img src="${character_data.image}" alt="${character_data.name}">
            <section class="info">
                <h3>${character_data.name}</h3>
                <h4>Gender:</h4><p>${character_data.gender}</p>
                <h4>Species:</h4><p>${character_data.species}</p>
                <h4>Type:</h4><p>${character_data.type}</p>
            </section>
        </div>`;
    }
}

async function main() {
    get_seasons();

    document.querySelector('#season_select').addEventListener('change', (e) => {
        episode_select.innerHTML = '<option value="0">Episodes</option>';
        get_episodes(`${e.target.value.split('')[1]}${e.target.value.split('')[2]}`);
    })
    document.querySelector('#episode_select').addEventListener('change', (e) => {
        document.querySelector('.characters').innerHTML = '';
        gen_characters(e.target.value);
    })
}
main();