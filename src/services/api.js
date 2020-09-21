import {http} from "./http-common";

class ApiService {

    getEntes() {
        return http.get("/entes");
    }

    getUsuarios() {
        return http.get("/coordenadores");
    }

    getUsuariosByGrupoUsuarioId(grupoUsuarioId) {
        return http.get("/usuario/" + grupoUsuarioId);
    }

    getPeriodos(id) {
        return http.get("/periodos/frequencia/" + id);
    }

    getRemessas(filtro) {
        return http.get("/remessas/filtro"+ filtro);
    }

    getFrequencia() {
        return http.get("/frequencias");
    }

    postRemessa(remessa) {
        return http.post("/remessas", remessa);
    }

    postObrigacao(obrigacao) {
        return http.post("/obrigacoes", obrigacao);
    }

    postEnte(ente) {
        return http.post("/entes", ente);
    }
}

export default new ApiService();