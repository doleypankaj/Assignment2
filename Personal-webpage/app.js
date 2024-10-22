var app = angular.module('personalApp', []);

app.controller('ProfileController', function($scope) {
    $scope.person = {
        name: "Pankaj Doley",
        title: "Bachelor of Computer Application (BCA) 3rd semester Student",
        about: "Hello, my name is Pankaj Doley, and I am currently pursuing my Bachelor of Computer Applications (BCA) in my 3rd semester at Assam down town University. I have a strong interest in technology and web development. Recently, I've been working on a project focused on creating an e-commerce website for Mising Handloom and Textile products, where I'm involved in building features like account management and shopping cart functionality. I am passionate about learning new programming languages and enhancing my skills in areas like HTML, CSS, and JavaScript. In the future, I aim to explore more advanced fields like Hacking ,cyber security and mobile application development.",
        hobbies: ["Reading", "Traveling", "Photography", "Coding"],
        family: ["Father: Ajanta doley", "Mother: Dipali doley", "sister: jugamaya doley"],
        school: "CHRIST KING HIGH SCHOOL",
        college: "ASSAM DOWNTOWN UNIVERSITY",
        certificates: ["JavaScript Mastery Certificate", "Best Volunteer Award 2022", "Web Development Certificate"],
        contributions: "I provide free coding lessons to children, contribute to open-source projects, and actively engage with my local community to promote STEM education.",
        email: "doleymiro49@gmail.com"
    };
});
