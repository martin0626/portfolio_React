


const PROJECTS = [
    {
        id: '1',
        name: 'Home Cleaning',
        longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ducimus laudantium distinctio quos!',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ducimus laudantium distinctio quos!',
        coverImg: "Cleaning1.png",
        gallery: ["Cleaning1.png", "Cleaning2.png", "Cleaning3.png", "Cleaning4.png", "Cleaning5.png"],
        skills: ['React', 'HTML', 'CSS', 'Sass', 'Git'],
        demoLink: 'https://familycleaning-1e90f.web.app/?fbclid=IwY2xjawGu1VRleHRuA2FlbQIxMAABHcFEnVtgGDjf8UjK05BC9pIw_RsuI7nAdxWH_JA8D3A4dKYa2Y4yYelFsw_aem_WTAXWOcml2P_uzByBgI4tQ',
        codeLink: 'https://github.com/martin0626/CleaningWeb_React',
    },
    {
        id: '2',
        name: 'Home Cleaning',
        longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ducimus laudantium distinctio quos!',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ducimus laudantium distinctio quos!',
        coverImg: "Cleaning1.png",
        gallery: ["Cleaning1.png", "Cleaning1.png", "Cleaning1.png"],
        skills: ['React', 'HTML', 'CSS', 'Sass', 'Git'],
        demoLink: undefined,
        codeLink: 'https://github.com/martin0626/CleaningWeb_React',
    },
    {
        id: '3',
        name: 'Home Cleaning',
        longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ducimus laudantium distinctio quos!',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ducimus laudantium distinctio quos!',
        coverImg: "Cleaning1.png",
        gallery: ["Cleaning1.png", "Cleaning1.png", "Cleaning1.png"],
        skills: ['React', 'HTML', 'CSS', 'Sass', 'Git'],
        demoLink: undefined,
        codeLink: 'https://github.com/martin0626/CleaningWeb_React',
    },
]


const projectsObj = {
    projects: PROJECTS,
    getProjects: function(){
        return this.projects;
    },
    getSingleProject: function(id){
        return this.projects.find(p=> p.id === id);
    },
}

export default projectsObj;