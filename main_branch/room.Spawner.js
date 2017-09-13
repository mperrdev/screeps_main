require('role.harvester');
require('role.upgrader');

module.exports = {
    run: function(spawner) {
        spawner.memory.minHarvesterCount = 10;
        spawner.memory.harvesterCount = _.sum(spawner.room.creeps, (c) => c.memory.role == 'harvester');
        console.log(spawner.memory.harvesterCount);

        if(spawner.memory.harvesterCount < spawner.memory.minHarvesterCount) {
            if (spawner.energy == spawner.energyCapacity) {
                var creepName = spawner.createCreep( [WORK,CARRY,CARRY,MOVE], undefined, {working: false, role: 'harvester'} );
                console.log("Spawning harvester creep: " + creepName);
            }
        }
        else{
            console.log("Met harvester count in room: " + spawner.pos.roomName);
        }
    }
};
