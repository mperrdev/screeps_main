require('role.harvester');
require('role.upgrader');

module.exports = {
    run: function(spawner) {
        //Harvesters
        spawner.memory.minHarvesterCount = 25;
        spawner.memory.harvesterCount = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');

        //Upgraders
        spawner.memory.minUpgraderCount = 12;
        spawner.memory.upgraderCount = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');

        //Builders
        spawner.memory.minBuilderCount = 8;
        spawner.memory.builderCount = _.sum(Game.creeps, (c) => c.memory.role == 'builder');

        //Attackers
        spawner.memory.minAttackerCount = 2;
        spawner.memory.attackerCount = _.sum(Game.creeps, (c) => c.memory.role == 'attacker');



        if (spawner.memory.harvesterCount < spawner.memory.minHarvesterCount && !(spawner.memory.upgraderCount < 2)) {
            if (spawner.energy == spawner.energyCapacity) {
                var creepName = spawner.createCreep( [WORK,CARRY,MOVE,MOVE], undefined, {working: false, role: 'harvester'} );
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
                var creepName = spawner.createCreep( [WORK,WORK,CARRY,MOVE], undefined, {working: false, role: 'builder'} );
                console.log("Spawning builder creep: " + creepName + " (" + spawner.memory.builderCount + ")");
            }
        }
        else if (spawner.memory.attackerCount < spawner.memory.minAttackerCount) {
            if (spawner.energy == spawner.energyCapacity) {
                var creepName = spawner.createCreep( [CLAIM,CLAIM,CARRY,MOVE], undefined, {working: false, role: 'attacker'} );
                console.log("Spawning attacker creep: " + creepName + " (" + spawner.memory.attackerCount + ")");
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
