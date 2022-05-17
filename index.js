var exec = require('child_process').exec;
var child;

; (function main() {
    exec(`pgrep ${process.argv[3]}`, function (error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        } else {
            readOut(stdout)
        }
    })
})()

function readOut(data) {
    if (process.argv[2].toLowerCase() == "pause") {
        data.split("\n").forEach(i => {
            console.log(`Pausing PID ${i}`)
            exec(`kill -STOP ${i}`)
        })
    } else {
        data.split("\n").forEach(i => {
            console.log(`Unpausing PID ${i}`)
            exec(`kill -CONT ${i}`)
        })
    }
}