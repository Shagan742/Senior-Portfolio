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
        generateCircles() {
            for(int i=0; i<2; i++) {
                generateCircleX(/* changing currentPosition */);
            }
        }
    },
    computed: {
        generateCircleX(start) {
            let n=start;
            let lineLength=900;
            return n+(lineLength/3);
        }
    }
})

vue_app.mount('#app')