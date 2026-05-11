const vue_app = Vue.createApp({
    created() {
        fetch('A.json').then(response => response.json()).then(json => {
            this.A = json
            console.log(this.A)
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