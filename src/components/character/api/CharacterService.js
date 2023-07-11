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
        return axios.get(`http://localhost:8080/api/v1/characters?page=${pageNumber}&size=20`)
    }
    getAllCharacters() {
        return axios.get(`http://localhost:8080/api/v1/characters`)
    }

    markCharacterAsFavourite(characterId, favouriteStatus) {
        return axios.put(`http://localhost:8080/api/v1/characters/favourite/${characterId}`,
            { 'isFavourite': favouriteStatus }, Headers = {
                'Content-Type': 'application/json'
            }
        )
    }

    getFavouriteCharacters() {
        return axios.get('http://localhost:8080//api/v1/characters/favourite')
    }

    getFavouriteCharactersWithPaging(pageNumber) {
        return axios.get(`http://localhost:8080/api/v1/characters/favourite?page=${pageNumber}&size=20`)
    }

}

export default new CharacterService();