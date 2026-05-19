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
    directives: {
    'fade-on-scroll': {
      mounted(el) { //the element's styles are put on it to happen upon load
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

        const observer = new IntersectionObserver(([entry]) => { //observes for user scrolling upon said element
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)'; //make these styles apply if user scrolled upon element
            observer.unobserve(el); //leave element alone after, making it not fade-in again and again
          }
        }, { threshold: 0.1 }); //how much a user needs to scroll to the element's location for fade-in to occur

        observer.observe(el); //observe the next element w/ class 'fade-on-scroll'
      }
    }
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