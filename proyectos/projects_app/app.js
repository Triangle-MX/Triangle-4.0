// Functions

    // Get Thumbnail
    function thumbnail(name) {
        var out = '../img/projects/thumbnails/' + name + '.svg';
        return out;
    };

    // Get Internal Link
    function internalLink(name) {
        var out = "/proyectos/" + name + '.html';
        return out;
    };


// App + Data
var projectsApp = new Vue({
  el: '#projects-app',
  data: {
    projects: [
        { name: 'Cardalimp', thumbnailSource: thumbnail('cardalimp'), linkSource: 'https://cardalimp.com/', linkTarget: '_self' },
        { name: 'Brainstorm', thumbnailSource: thumbnail('brainstorm'), linkSource: 'https://brainstorm-cs.netlify.com/', linkTarget: '_self' },
        { name: 'Learning English', thumbnailSource: thumbnail('learning-english'), linkSource: 'https://alvaro-le.netlify.com/', linkTarget: '_self' }
    ]
  }
});
