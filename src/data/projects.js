


const PROJECTS = [
    {
        id: '1',
        name: 'Home Cleaning',
        longDescription: 'It is static web page where I used only React, Sass and HTML for creating. It is fully responsive and can be used on any device. This was my first try to do more beautifull and responsive web page and also my first project using Sass preprocessor.\n Functionallity of the project is really simple. There is navigation which is scrolling to the exact section, rating form and contact for which is using "emailjs" for sending  emails after the contact form is correctly filled. ',
        shortDescription: 'This is static web page where I used only React, Sass and HTML for creating.',
        coverImg: "Cleaning1.png",
        gallery: ["Cleaning1.png", "Cleaning2.png", "Cleaning3.png", "Cleaning4.png", "Cleaning5.png"],
        skills: ['React', 'HTML', 'CSS', 'Sass', 'Git'],
        demoLink: 'https://familycleaning-1e90f.web.app/?fbclid=IwY2xjawGu1VRleHRuA2FlbQIxMAABHcFEnVtgGDjf8UjK05BC9pIw_RsuI7nAdxWH_JA8D3A4dKYa2Y4yYelFsw_aem_WTAXWOcml2P_uzByBgI4tQ',
        codeLink: 'https://github.com/martin0626/CleaningWeb_React',
    },
    {
        id: '2',
        name: 'Omnifood (Course Project)',
        longDescription: ' My Final project after completion of "Responsive Real-World Websites with HTML and CSS" course. For this responsive web page was used only HTML and CSS. You can check live demo of the project.',
        shortDescription: 'My Final project after completion of "Responsive Real-World Websites with HTML and CSS" course.',
        coverImg: "Omnifood1.png",
        gallery: ["Omnifood1.png", "Omnifood2.png", "Omnifood3.png", "Omnifood4.png", "Omnifood5.png"],
        skills: ['HTML', 'CSS', 'Git'],
        demoLink: "https://omnifood-project-martin.netlify.app/",
        codeLink: 'https://github.com/martin0626/HTML-CSS_Course-html?tab=readme-ov-file',
    },
    {
        id: '3',
        name: 'Wood Store',
        longDescription: 'React Ecommerce application, where my part is only the frontend functionality. For this project I used React, React Router, Redux/Redux Toolkit, FramerMotion(React animations), HTML, CSS and also GitHub to store my project and add changes.\n This project is exercise for improving my React skills without emphasizing on the visuallization of the page. With this project I learned and consolidated knowledge of Components, Hooks, working with API requests, React Router, managing Global state with Redux, authorization using AUTH Token, using external libraries  and dealing with different problems during the development. Backend part is on JAVA (created by my colleague), which provides me API for the products and orders creation. I also used "Speedy" develpoment API, which I found and use to fetch all offices in Bulgaria in JSON format.\n Functionallity: check products, add to cart, order, searching by name of the product, sorting and filtering products, products CRUD operations after login as an admin with username and password.',
        shortDescription: 'React Ecommerce application, where my part is only the frontend functionality.',
        coverImg: "WoodShop_1.png",
        gallery: ["WoodShop_1.png", "WoodShop_9.png" , "WoodShop_8.png", "WoodShop_2.png", "WoodShop_3.png", "WoodShop_4.png", "WoodShop_5.png", "WoodShop_6.png", "WoodShop_7.png"],
        skills: ['React', 'HTML', 'CSS', 'Git'],
        demoLink: undefined,
        codeLink: 'https://github.com/martin0626/Wood_shop_project',
    },
    {
        id: '4',
        name: 'Portfolio Project',
        longDescription: "I built this page from scratch using React, React Roter, Sass, HTML and Git. I built it to collect all my projects in one place and represent my experience and knowledge in the field of programming.\n Functionality of this project is simple and aimed at my presentation to future employers. There are a few pages and cotact form, which can be used to contact me directly.",
        shortDescription: 'My personal web page, which I build from scratch to represent my current knowledge and work.',
        coverImg: "WoodShop_1.png",
        gallery: ["WoodShop_1.png", "WoodShop_9.png" , "WoodShop_8.png", "WoodShop_2.png", "WoodShop_3.png", "WoodShop_4.png", "WoodShop_5.png", "WoodShop_6.png", "WoodShop_7.png"],
        skills: ['React', 'HTML', 'CSS', 'Git'],
        demoLink: '/',
        codeLink: 'https://github.com/martin0626/portfolio_React',
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