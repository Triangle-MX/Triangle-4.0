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
        //{ name: 'Ragnar', thumbnailSource: thumbnail('Ragnar'), linkSource: 'https://ragnar-mexico.myshopify.com/', linkTarget: '_blank' },
        { name: 'Learning English', thumbnailSource: thumbnail('learning-english'), linkSource: 'https://alvaro-le.netlify.com/', linkTarget: '_blank' },
        { name: 'Cardalimp', thumbnailSource: thumbnail('cardalimp'), linkSource: 'https://cardalimp.com/', linkTarget: '_self' },
        { name: 'Brainstorm', thumbnailSource: thumbnail('brainstorm'), linkSource: 'https://brainstorm-cs.netlify.com/', linkTarget: '_blank' },
        //{ name: 'Enchúlame mis Tenis', thumbnailSource: thumbnail('enchulame-mis-tenis'), linkSource: 'https://www.enchulamemistenis.com/', linkTarget: '_blank' },
        //{ name: 'Hypebeast México', thumbnailSource: thumbnail('hypebeast-mexico'), linkSource: 'https://hypebeastmexico.com/', linkTarget: '_blank' },
    ]
  }
});
