const exec = require('child_process').exec

function LinuxCommand(command) {
    exec(command, (err, stdout, stderr) => {
        if (err) {
            err);
            return;
        }
        if (stdout) {
            console.log(stdout);
            return;
        }
        console.log(stderr);
    });
}

LinuxCommand('ls');

module.exports = LinuxCommand;