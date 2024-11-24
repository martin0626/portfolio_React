
const CERTIFICATES = [
    {
        title: 'Resume',
        position: 1,
        image: "ResumeImg.png",
    },
    {
        title: 'React Certificate',
        position: 2,
        image: "React_Certificate.png",
    },
    {
        title: 'HTML&CSS Certificate',
        position: 3,
        image: "HTMLCSS_Certificate.png",
    },
    {
        title: 'JS Advanced',
        position: 4,
        image: "JSAdvanced.png",
    },
    {
        title: 'JS Applications',
        position: 5,
        image: "JSapps.png",
    },
    {
        title: 'Python Advanced',
        position: 6,
        image: "PyAdvanced.png",
    },
    {
        title: 'Python OOP',
        position: 7,
        image: "PythonOOP.png",
    },
    {
        title: 'Python Web Framework - Django',
        position: 8,
        image: "PythonWeb.png",
    }
]


const certificatesObj = {
    certificates: CERTIFICATES,
    getCertificates: function(){
        return this.certificates;
    },
    getCertificatesImages: function(){
        return this.certificates.map(c=> c.image);
    },
    getCertificatesTitles: function(){
        return this.certificates.map(c=> c.title);
    },
}


export default certificatesObj;