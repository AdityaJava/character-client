import axios from "axios";

class CharacterService {
    retrieveAllHousesService(houseName) {
        return axios.get('http://localhost:8080/api/v1/characters/houses');
    }

    getCharacterById(characterId) {
        console.log(characterId)
        return axios.get(`http://localhost:8080/api/v1/characters/${characterId}`);
    }

    retrieveFamilyTree(houseName) {
        return axios.get(`http://localhost:8080/api/v1/characters/familytree/${houseName}`)
    }
    getAllCharactersWIthPaging(pageNumber) {
        return axios.get(`http://localhost:8080/api/v1/characters?page=${pageNumber}&size=30`)
    }
    getAllCharacters() {
        return axios.get(`http://localhost:8080/api/v1/characters`)
    }

    getIsCharacterFavourite(favouriteCharacter) {
        return axios.get(`http://localhost:8080/api/v1/characters/favouriteCharacter`)
    }

    markCharacterAsFavourite(characterId, favouriteStatus) {
        return axios.put(`http://localhost:8080/api/v1/characters/favourite/${characterId}`,
            { 'isFavourite': favouriteStatus }, Headers = {
                'Content-Type': 'application/json'
            }
        )
    }

}

export default new CharacterService();