import {createStore} from "vuex";
import constants from "@/constants";
import axios from "axios";

const store = createStore({
    state: {
        feedbacks: []
    },
    mutations: {
        addFeedback(state, feedback) {
            state.feedbacks.push(feedback)
        }
    },
    actions: {
        addFeedback(context, feedback) {
            const formData = new FormData()
            formData.set('name', feedback.name)
            formData.set('feedback', feedback.feedback)
            axios.post(`${constants.apiUrl}create-feedback`, formData, {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
                .then(response => {
                    if (response.data.success) {
                        context.commit('addFeedback', feedback)
                    }
                })
                .catch(e => console.log(e))

        }
    },
    getters: {
        getFeedbacks: (state) => state.feedbacks
    }
})

export default store;