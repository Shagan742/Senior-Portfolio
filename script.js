const vue_app = Vue.createApp({
    created() {
        fetch('skills.json').then(response => response.json()).then(json => {
            this.skills = json
            console.log(this.skills)
        })

        fetch('timelineData.json').then(response => response.json()).then(json => {
            this.timelineData = json
            console.log(this.timelineData)
        })
    },
    data() {//this is the data
        return {
            skills: [],
            timelineData: []
        }
    },
    methods: {
        
    }
})

vue_app.mount('#app')