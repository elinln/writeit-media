import http from "../http-common";

class WorkoutDataService {
    getAll() {
        return http.get("/api/workouts");
    }

    get(id) {
        return http.get(`/api/workouts/${id}`);
    }

    create(data) {
        return http.post("/api/workouts", data);
    }

    createUser(data) {
        return http.post("/user", data);
    }

    update(id, data) {
        return http.put(`/api/workouts/${id}`, data);
    }

    delete(id) {
        return http.delete(`/api/workouts/${id}`);
    }

    deleteAll() {
        return http.delete(`/api/workouts`);
    }

    findByTitle(title) {
        return http.get(`/api/workouts?title=${title}`);
    }
}

export default new WorkoutDataService();