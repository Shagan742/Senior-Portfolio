const vue_app = Vue.createApp({
    created() {
        fetch('skills.json').then(response => response.json()).then(json => {
            this.skills = json
        })

        fetch('timelineData.json').then(response => response.json()).then(json => {
            this.timelineData = json
        })

        fetch('projects.json').then(response => response.json()).then(json => {
            this.projects = json
        })
    },
    data() {//this is the data
        return {
            skills: [],
            timelineData: [],
            projects:[],
            year:'Sophomore'
        }
    },
    methods: {
        // generateCircles() {
        //     for(let i=0; i<2; i++) {
        //         generateCircleX(/* changing currentPosition */);
        //     }
        // },
        
    },
    computed: {
        filterArr() {
            return this.projects.filter(proj => proj.year===this.year)
        },
        // generateCircleX(start) {
        //     let n=start;
        //     let lineLength=900;
        //     return n+(lineLength/3);
        // },
        threeCardsPerSlide() {
            const three=[];
            for(let i=0; i<this.filterArr.length; i+=3) {
               three.push(this.filterArr.slice(i, i+3))
            }
            return three;
        }
    }
})

vue_app.mount('#app')