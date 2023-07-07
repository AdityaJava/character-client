import axios from "axios";

class CharacterService {
    retrieveAllHousesService(houseName) {
        return axios.get('http://localhost:8080/api/v1/characters/houses');
    }

    getCharacterById(characterId) {
        console.log("getCharacterById")
        console.log(characterId)
        return axios.get(`http://localhost:8080/api/v1/characters/${characterId}`);
    }

    retrieveFamilyTree(houseName) {
        return axios.get(`http://localhost:8080/api/v1/characters/familytree/${houseName}`)
    }
    getAllCHaracters(pageNumber) {
        return axios.get(`http://localhost:8080/api/v1/characters?page=${pageNumber}&size=30`)
    }
}

export default new CharacterService();