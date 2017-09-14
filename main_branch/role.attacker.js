module.exports = {
    run: function(creep) {

            var attackThis = Memory.commands.attackTarget.pos
            var enemyController = attackThis.room.controller

            if (creep.reserveController(enemyController) == ERR_NOT_IN_RANGE || ERR_INVALID_TARGET) {
                creep.moveTo(enemyController)
            }
    }
}
