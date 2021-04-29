import { reactive } from "vue"
export default {
    state: reactive({
        token: localStorage.getItem("token") || "",
        username: localStorage.getItem("user") || "",
        email: localStorage.getItem("email") || "",
        messages: [],
    })
}