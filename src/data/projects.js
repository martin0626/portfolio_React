


const PROJECTS = [
    {
        id: '1',
        name: 'Home Cleaning',
        longDescription: 'It is a static web page where I used only React, Sass, and HTML to create it. It is fully responsive and can be used on any device. This was my first attempt at creating a more beautiful and responsive web page, as well as my first project using the Sass preprocessor.\n\nThe functionality of the project is quite simple. There is a navigation bar that scrolls to specific sections, a rating form, and a contact form that uses "EmailJS" for sending emails after the contact form is correctly filled out.',
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
        longDescription: 'This is my final project after completing the "Responsive Real-World Websites with HTML and CSS" course. For this responsive web page, I used only HTML and CSS. You can check out a live demo of the project.',
        shortDescription: 'This is my final project after completing the "Responsive Real-World Websites with HTML and CSS" course.',
        coverImg: "Omnifood1.png",
        gallery: ["Omnifood1.png", "Omnifood2.png", "Omnifood3.png", "Omnifood4.png", "Omnifood5.png"],
        skills: ['HTML', 'CSS', 'Git'],
        demoLink: "https://omnifood-project-martin.netlify.app/",
        codeLink: 'https://github.com/martin0626/HTML-CSS_Course-html?tab=readme-ov-file',
    },
    {
        id: '3',
        name: 'Wood Store',
        longDescription: 'This is a React eCommerce application, where my role was focused solely on frontend functionality. For this project, I used React, React Router, Redux/Redux Toolkit, Framer Motion (for animations), HTML, CSS, and GitHub to store the project and manage changes.\n\nThis project served as an exercise to improve my React skills, with less emphasis on the visualization of the page. Through this work, I learned and consolidated my knowledge of components, hooks, working with API requests, React Router, managing global state with Redux, handling authorization using AUTH tokens, integrating external libraries, and solving various challenges during development.\n\nThe backend, developed in Java by a colleague, provides APIs for product and order creation. Additionally, I used the "Speedy" development API, which allowed me to fetch all office locations in Bulgaria in JSON format.\n\nFunctionality: the application allows users to view products, add items to the cart, place orders, search for products by name, sort and filter products, and perform CRUD operations on products after logging in as an admin with a username and password.',
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
        longDescription: "I built this page from scratch using React, React Router, Sass, HTML, and Git. The purpose of this project was to unify all my work in one place and showcase my experience and knowledge in programming.\n\nThe functionality is simple and tailored to present myself to potential employers. It includes multiple pages and a contact form, which can be used to reach me directly.",
        shortDescription: 'My personal web page, which I build from scratch to represent my current knowledge and work.',
        coverImg: "Portfolio.png",
        gallery: ["Portfolio.png", "Portfolio_1.png"],
        skills: ['React', 'HTML', 'CSS', 'Git'],
        demoLink: '/',
        codeLink: 'https://github.com/martin0626/portfolio_React',
    },
    {
        id: '5',
        name: 'Beauty Services Web App',
        longDescription: "I am currently developing this page from scratch using React, TypeScript, React Router, React-Redux, Node.js, Mongoose, Express, Tanstack Query, Sass, HTML, and Git. The purpose of this project is to practice both my frontend and backend skills using the MERN stack.\n\nThe functionality of the project is to allow users to find beauty services based on their location quickly and easily. I decided to start this project because it offers a wide range of functionalities to build, making it perfect for improving my skills. I am actively working on it, and you can check my progress on my GitHub account.",
        shortDescription: '[Currently Working On] Web App for beauty services (hairstyle, nails and etc.), where busness owners can add their saloons, and users can found them easy in one place.',
        coverImg: "SC_1.png",
        gallery: ["SC_1.png", "SC_2.png", "SC_3.png", "SC_4.png"],
        skills: ['React', "TS", 'Node JS', "Express", "Mongoose", "Sass", 'HTML', 'CSS', 'Git'],
        demoLink: undefined,
        codeLink: 'https://github.com/martin0626/S-C_ManageApp',
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