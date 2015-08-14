var exec = require('child_process').exec;
var child;

function go() {
    child = exec("sshpass -praspberry ssh -o 'StrictHostKeyChecking no' pi@192.168.1.161 'sudo service motion start'", function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
}
function stop() {
    child = exec("sshpass -praspberry ssh -o 'StrictHostKeyChecking no' pi@192.168.1.161 'sudo service motion stop'", function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
}