$('body').terminal({
    contactme: function () {
        this.echo('Contact me on '
            + '<a href="https://in.linkedin.com/in/rajarshi-chowdhury-078457244">Linkedin</a>'
            ,{raw: true});
    },
    intro: function(){
        this.echo('<div class="coo">' +
            '<div class="image">' +
            '<img src="images/wells.gif"></img>' +
            '</div>' +
            '<div class="text">' +
                '<h3>Hi, I am Rajarshi Chowdhury, a pre-final year CSE student passionate in Web Development, Data Science and Machine Learning</h3>' +
            '</div>' +
        '</div>',{raw: true});
        this.echo('<a href="https://drive.google.com/drive/folders/1crtFTFYStrppYAYxM6FBN8xoe3RXMRQB">Resume</a>', {raw: true});
        this.echo("'skills' for seeing my skills");
        this.echo("'projects' for seeing my projects");
    },
    skills: function(){
        this.echo('<div class = "container" id = "x">'
        + '<h2>My Skills</h2>'
        + '<li>'
        + '<span class = "heading">HTML</span>'
        + '<div class = "skillbar">'
        + '<span class = "html"></span>'
        + '</div>'
        +'</li>'
        + '<li>'
        + '<span class = "heading">CSS</span>'
        + '<div class = "skillbar">'
        + '<span class = "css"></span>'
        + '</div>'
        +'</li>'
        + '<li>'
        + '<span class = "heading">Javascript</span>'
        + '<div class = "skillbar">'
        + '<span class = "js"></span>'
        + '</div>'
        +'</li>'
        + '<li>'
        + '<span class = "heading">Python</span>'
        + '<div class = "skillbar">'
        + '<span class = "py"></span>'
        + '</div>'
        +'</li>'
        + '<li>'
        + '<span class = "heading">C</span>'
        + '<div class = "skillbar">'
        + '<span class = "c"></span>'
        + '</div>'
        +'</li>'
        + '<li>'
        + '<span class = "heading">Java</span>'
        + '<div class = "skillbar">'
        + '<span class = "java"></span>'
        + '</div>'
        +'</li>'
        + '<li>'
        + '<span class = "heading">Julia</span>'
        + '<div class = "skillbar">'
        + '<span class = "jl"></span>'
        + '</div>'
        +'</li>'
        + '<li>'
        + '<span class = "heading">C++</span>'
        + '<div class = "skillbar">'
        + '<span class = "cpp"></span>'
        + '</div>'
        +'</li>'
        + '</div>'
        , {raw : true});
    },
    projects: function(){
        this.echo('<div class="text">'
            +'I have done projects on Web development and Machine Learning'
            +'</div>', {raw : true});
        this.echo('Check them out <a href="https://github.com/Grogu22">here</a>', {raw : true});
    },
    help: function () {
        this.echo('contactme : Reach me on LinkedIN\n'
        + 'clear : clear the terminal');
    }},
   {
    greetings: 'Rajarshi here, welcome to my website\n'
        + "type 'intro' to know about me and\n" 
        + "'help' for further help"
});