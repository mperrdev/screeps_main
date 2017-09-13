require('role.harvester');
require('role.upgrader');

module.exports = {
    run: function(spawner) {

        //Harvesters
        spawner.memory.minHarvesterCount = 15;
        spawner.memory.harvesterCount = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
        console.log(spawner.memory.harvesterCount);

        //Upgraders
        spawner.memory.minUpgraderCount = 5;
        spawner.memory.upgraderCount = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
        console.log(spawner.memory.upgraderCount);


        if (spawner.memory.harvesterCount < spawner.memory.minHarvesterCount) {
            if (spawner.energy == spawner.energyCapacity) {
                var creepName = spawner.createCreep( [WORK,WORK,CARRY,MOVE], undefined, {working: false, role: 'harvester'} );
                console.log("Spawning harvester creep: " + creepName);
            }
        }
        else if (spawner.memory.upgraderCount < spawner.memory.minUpgraderCount) {
            if (spawner.energy == spawner.energyCapacity) {
                var creepName = spawner.createCreep( [WORK,CARRY,CARRY,MOVE], undefined, {working: false, role: 'upgrader'} );
                console.log("Spawning upgrader creep: " + creepName);
            }
        }
        else{
            console.log("Met harvester and upgrader count in room: " + spawner.roomName);
        }
    }
};
