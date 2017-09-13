require('role.harvester');
require('role.upgrader');

module.exports = {
    run: function(spawner) {

        //Harvesters
        spawner.memory.minHarvesterCount = 14;
        spawner.memory.harvesterCount = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');

        //Upgraders
        spawner.memory.minUpgraderCount = 6;
        spawner.memory.upgraderCount = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');

        //Builders
        spawner.memory.minBuilderCount = 3;
        spawner.memory.builderCount = _.sum(Game.creeps, (c) => c.memory.role == 'builder');



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
        else if (spawner.memory.builderCount < spawner.memory.minBuilderCount) {
            if (spawner.energy == spawner.energyCapacity) {
                var creepName = spawner.createCreep( [WORK,CARRY,MOVE,MOVE], undefined, {working: false, role: 'builder'} );
                console.log("Spawning builder creep: " + creepName + " (" + spawner.memory.builderCount + ")");
            }
        }
        else{
            console.log("Met creep limits in room: " + spawner.room.name);
            console.log("Upgrader Count: " + spawner.memory.upgraderCount + "/" + spawner.memory.minUpgraderCount);
            console.log("Harvester Count: " + spawner.memory.harvesterCount + "/" + spawner.memory.minHarvesterCount);
            console.log("Builder Count: " + spawner.memory.builderCount + "/" + spawner.memory.minBuilderCount);
        }
    }
};
