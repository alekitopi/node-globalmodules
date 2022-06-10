const { exec } = require('child_process');
const homedir = require('os').homedir();
const path = require('path');

module.exports = (moduleName) => {
    var modulesFolder = path.join(homedir, '.globalmodules/');
    var modulePath = path.join(modulesFolder, 'node_modules/', moduleName);

    try {
        require.resolve(modulePath);
        var module = require(modulePath);
        if (!module) module = () => { return "Module not found"; };
        return module;
    } catch (e) {
        console.error("* Module " + moduleName + " has not been found on the system! Installing...");
        exec('npm --prefix ' + modulesFolder + ' install ' + moduleName, (err, stdout, stderr) => {
            console.log("* Module " + moduleName + " has been installed!");
        });
    }
}
