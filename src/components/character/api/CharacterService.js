import axios from "axios";

class CharacterService{
    retrieveAllHousesService(houseName){
        return axios.get('http://localhost:8080/api/v1/characters/houses');
    }

    getCharacterById(characterId){
        return axios.get(`http://localhost:8080/api/v1/characters/${characterId}`);
    }
    
    retrieveFamilyTree(houseName){
        return axios.get(`http://localhost:8080/api/v1/characters/familytree/${houseName}`)
    }
}

export default new CharacterService();