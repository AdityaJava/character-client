import axios from "axios";

class CharacterService{
    executeGetHousesService(){
        return axios.get('http://localhost:8080/api/v1/characters/familytree/Umber');
    }
}

export default new CharacterService();