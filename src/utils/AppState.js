import { reactive } from "vue";

const AppState = reactive({
    user: null,
    level: {
        max: 100,
        min: 0,
    },
    provider: {
        
    },

})

export default AppState;