import {http} from "./http-common";

class ApiService {

    getEntes() {
        return http.get("/entes");
    }

    getCoordenadores() {
        return http.get("/coordenadores");
        
    }

    getPeriodos() {
        return http.get("/periodos");
        
    }

}

export default new ApiService();