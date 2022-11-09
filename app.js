$('body').terminal({
    iam: function (name) {
        this.echo('Hello, ' + name +
            '. Welcome to BUG and chill');
    },
    founder: function () {
        this.echo('team dev-kamindo');
    },
    help: function () {
        this.echo('nikto: ',
        + 'nikto -h *ipaddress\n',
        + 'nikto -h www.youromainname.com');
    },
    
}, {
    greetings: 'NIKTO-SCAN  - [v:1.0.0]'
        + ' WELCOME TO SHELL TERMINAL NIKTO 2022\n'
                                  
});


/* var _getAllFilesFromFolder = function(dir) {
var filesystem = require("fs");
var result = [];

filesystem.readdirSync(dir).forEach(Function(file) {
    
    file = dir + '/' + file;
    var stat = filesysten.statSync(file);
    
    if (stat && stat.isDirectory()) {
        result = result.concat(_getAllFilesFromFolder(file))
    } else result.push(file);
});

return results;
}; */


var fs = require("fs");

$scope.explorer = [];
$scope.openFile = function() {
    $scope.explorer = [tree_entry($scope.path)];
    get_folder($scope.path, $scope.explorer[0].children);
};

function get_folder(path, tree) {
    fs.readdir(path, function (err, files){
        if(err) return console.log(err);


        files.forEach(function(file,idx){
            tree.push(tree_entry(file));
            fs.lstat(path+'/'+file,function(err, stats){
                if(err) return console.log(err);
                if(stats.isDirectory()){
                    get_folder(path+'/'+file, tree[idx].children);
                }
            });
        });
    });
    console.log($scope.explorer);

    return;
}

function tree_entry(entry) {
    return {label : entry, children: []};
}
