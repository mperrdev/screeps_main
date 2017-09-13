require('role.harvester');
require('role.upgrader');

module.exports = {
    run: function(spawner) {

        //Harvesters
        spawner.memory.minHarvesterCount = 10;
        spawner.memory.harvesterCount = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');


        //Upgraders
        spawner.memory.minUpgraderCount = 4;
        spawner.memory.upgraderCount = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');



        if (spawner.memory.harvesterCount < spawner.memory.minHarvesterCount) {
            if (spawner.energy == spawner.energyCapacity) {
                var creepName = spawner.createCreep( [WORK,WORK,CARRY,MOVE], undefined, {working: false, role: 'harvester'} );
                console.log("Spawning harvester creep: " + creepName + " (" + spawner.memory.harvesterCount + ")");
            }
        }
        else if (spawner.memory.upgraderCount < spawner.memory.minUpgraderCount) {
            if (spawner.energy == spawner.energyCapacity) {
                var creepName = spawner.createCreep( [WORK,CARRY,CARRY,MOVE], undefined, {working: false, role: 'upgrader'} );
                console.log("Spawning upgrader creep: " + creepName + " (" + spawner.memory.upgraderCount + ")");
            }
        }
        else{
            console.log("Met harvester and upgrader count in room: " + spawner.roomName);
            console.log("Upgrader Count: " + spawner.memory.upgraderCount + "/" + spawner.memory.minUpgraderCount);
            console.log("Harvester Count: " + spawner.memory.harvesterCount + "/" + spawner.memory.minHarvesterCount);
        }
    }
};
