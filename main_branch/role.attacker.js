module.exports = {
    run: function(creep) {


            var attackThis = Memory.commands.attackTarget.pos
            var enemyController = attackThis.room.controller

            if (creep.attackController(enemyController) == ERR_NOT_IN_RANGE) {
                creep.moveTo(enemyController)
            }


        }
    }
}
