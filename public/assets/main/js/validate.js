//Utility Scripting @Gilbert
// Validating the user input
// Forwarding to message from the

function validate() {
    var middleName = $("#middleName").val();
    var lastName = $("#lastName").val();
    var firstName = $("#firstName").val();
    var password = $("#loginPassword").val();
    var username = $("#emailAddress").val();
    var confirmPassword = $("#confirmPassword").val();

    //alert(reservedUsernames(username));
    if ($.trim(username) == '' || $.trim(password) == '') {
        alert("Both Email and Password are required");
        return false;
    }
    //First Name validation
    if (firstName.length < 3) {
        alert("FirstName too short");
        return false;
    }
    // calling the reserved usernames
    if (reservedUsernames(firstName) != -1) {
        alert("FirstName not allowed");
        return false;
    }
    // calling the reserved usernames
    if (reservedUsernames(lastName) != -1) {
        alert("LastName not allowed");
        return false;
    }
    // calling the reserved usernames
    if (reservedUsernames(middleName) != -1) {
        alert("MiddleName not allowed");
        return false;
    }
    //Middle Name validation
    if (middleName.length < 3) {
        alert("MiddleName too short");
        return false;
    }
    //Last Name validation
    if (lastName.length < 3) {
        alert("LastName too short");
        return false;
    }
    //username validation
    if (username.length < 3) {
        alert("Username too short");
        return false;
    }
    // password requirement validation
    if (password.length < 4) {
        alert("passowrd too short");
        return false;
    }
    // calling the reserved usernames
    if (reservedUsernames(username) != -1) {
        alert("Username not allowed");
        return false;
    }


    //alert("You have been regitered successfully!!");
    return true;

};
//validating reserved names
function reservedUsernames(username) {
    var names = [
        'about', 'access', 'account', 'accounts', 'add', 'address', 'adm', 'admin', 'administration', 'adult',
        'advertising', 'affiliate', 'affiliates', 'ajax', 'analytics', 'android', 'anon', 'anonymous', 'api',
        'app', 'apps', 'archive', 'atom', 'auth', 'authentication', 'avatar', 'backup', 'banner', 'banners',
        'bin', 'billing', 'blog', 'blogs', 'board', 'bot', 'bots', 'business', 'chat', 'cache', 'cadastro', 'calendar',
        'campaign', 'careers', 'cgi', 'client', 'cliente', 'code', 'comercial', 'compare', 'config', 'connect',
        'contact', 'contest', 'create', 'code', 'compras', 'css', 'dashboard', 'data', 'db', 'design', 'delete', 'demo',
        'design', 'designer', 'dev', 'devel', 'dir', 'directory', 'doc', 'docs', 'domain', 'download', 'downloads', 'edit',
        'editor', 'email', 'ecommerce', 'forum', 'forums', 'faq', 'favorite', 'feed', 'feedback', 'flog', 'follow', 'file',
        'files', 'free', 'ftp', 'gadget', 'gadgets', 'games', 'guest', 'group', 'groups', 'help', 'home', 'homepage', 'host',
        'hosting', 'hostname', 'html', 'http', 'httpd', 'https', 'hpg', 'info', 'information', 'image', 'img', 'images',
        'imap', 'index', 'invite', 'intranet', 'indice', 'ipad', 'iphone', 'irc', 'java', 'javascript', 'job', 'jobs', 'js',
        'knowledgebase', 'log', 'login', 'logs', 'logout', 'list', 'lists', 'mail', 'mail1', 'mail2', 'mail3', 'mail4', 'mail5',
        'mailer', 'mailing', 'mx', 'manager', 'marketing', 'master', 'me', 'media', 'message', 'microblog', 'microblogs',
        'mine', 'mp3', 'msg', 'msn', 'mysql', 'messenger', 'mob', 'mobile', 'movie', 'movies', 'music', 'musicas', 'my', 'name',
        'named', 'net', 'network', 'new', 'news', 'newsletter', 'nick', 'nickname', 'notes', 'noticias', 'ns', 'ns1', 'ns2',
        'ns3', 'ns4', 'old', 'online', 'operator', 'order', 'orders', 'page', 'pager', 'pages', 'panel', 'password', 'perl',
        'pic', 'pics', 'photo', 'photos', 'photoalbum', 'php', 'plugin', 'plugins', 'pop', 'pop3', 'post', 'postmaster',
        'postfix', 'posts', 'profile', 'project', 'projects', 'promo', 'pub', 'public', 'python', 'random', 'register',
        'registration', 'root', 'ruby', 'rss', 'sale', 'sales', 'sample', 'samples', 'script', 'scripts', 'secure', 'send',
        'service', 'shop', 'sql', 'signup', 'signin', 'search', 'security', 'settings', 'setting', 'setup', 'site', 'sites',
        'sitemap', 'smtp', 'soporte', 'ssh', 'stage', 'staging', 'start', 'subscribe', 'subdomain', 'suporte', 'support',
        'stat', 'static', 'stats', 'status', 'store', 'stores', 'system', 'tablet', 'tablets', 'tech', 'telnet', 'test',
        'test1', 'test2', 'test3', 'teste', 'tests', 'theme', 'themes', 'tmp', 'todo', 'task', 'tasks', 'tools', 'tv', 'talk',
        'update', 'upload', 'url', 'user', 'username', 'usuario', 'usage', 'vendas', 'video', 'videos', 'visitor', 'win', 'ww',
        'www', 'www1', 'www2', 'www3', 'www4', 'www5', 'www6', 'www7', 'wwww', 'wws', 'wwws', 'web', 'webmail', 'website',
        'websites',
        'webmaster', 'workshop', 'xxx', 'xpg', 'you', 'yourname', 'yourusername', 'yoursite', 'yourdomain'
    ];
    var index = $.inArray(username, names);
    return parseInt(index);
}

//==================================================================================
function hashpassword() {
    var salt = "";
    var hashPass = "";
    var randomText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        salt += randomText.charAt(Math.floor(Math.random() * randomText.length));

    shapass

    //return salt;
}

// console.log(makeid());
//================================================================================================
function encryUsingBecrypt(password, callback) { //this is a timer to allow the words Computing to show up
    var bcrypt = dcodeIO.bcrypt;
    var salt = "$2a$12$Fg0j.x19986i9LEeOIcuTu";
    var password = $("#password").val();
    var hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    callback(hash);
}


/*
encryUsingBecrypt(function(result){

    //Code that depends on 'result'
});

*/