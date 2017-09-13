module.exports = {
    run: function(creep) {


        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            var constructionTarget = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);

            if (creep.build(constructionTarget) == ERR_NOT_IN_RANGE) {
                creep.moveTo(constructionTarget);

            }
        }
        else {
            var source = creep.pos.findClosestByPath(Game.spawns.Spawn1)
            if (creep.withdraw(Game.spawns.Spawn1, RESOURCE_ENERGY, (creep.carryCapacity - creep.carry.energy)) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns.Spawn1);
            }
        }
    }
}
