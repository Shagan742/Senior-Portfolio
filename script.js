const vue_app = Vue.createApp({
    created() {
        fetch('skills.json').then(response => response.json()).then(json => {
            this.skills = json
            console.log(this.skills)
        })
    },
    data() {//this is the data
        return {
            ...
        }
    },
    methods: {
        ...
    }
})

vue_app.mount('#app')