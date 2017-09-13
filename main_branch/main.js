var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roomSpawner = require('room.Spawner');

module.exports.loop = function () {
    for (let name in Game.creeps) {
        var creep = Game.creeps[name];

        if (creep.memory.role == "harvester") {
            roleHarvester.run(creep);
        }
        else if (creep.memory.role == "upgrader") {
            roleUpgrader.run(creep);
        }
    }

    for (let name in Game.spawns) {
        var spawner = Game.spawns[name];
        roomSpawner.run(spawner);
    }
}
