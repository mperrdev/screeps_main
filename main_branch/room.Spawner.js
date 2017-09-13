module.exports.loop = {
    run: function(spawner) {
        if (spawner.energy == spawner.energyCapacity) {
            var creepName = spawner.createCreep( [WORK,CARRY,CARRY,MOVE], undefined, {working: false, role: harvester} );
            console.log("Spawning harvester creep: " + creepName);
        }
    }
};
