EntityEvents.spawned(event => {
    const entity = event.entity
    if (entity.isPlayer()) return

    const mobId = entity.type

    // Tabela de Efeitos para os Mobs Buffados
    // Amplificador: 0 = Nível 1, 1 = Nível 2
    const BUFFS = {
        // Velocidade 2x
        'born_in_chaos_v1:spiritof_chaos': [
            { id: 'minecraft:speed', amp: 1 }
        ],
        // Minibosses com Força e Resistência
        'born_in_chaos_v1:bonescaller': [
            { id: 'minecraft:resistance', amp: 0 }
        ],
        'born_in_chaos_v1:supreme_bonescaller': [
            { id: 'minecraft:resistance', amp: 1 },
            { id: 'minecraft:strength', amp: 0 }
        ],
        'born_in_chaos_v1:lifestealer': [
            { id: 'minecraft:strength', amp: 1 }
        ],
        'born_in_chaos_v1:door_knight': [
            { id: 'minecraft:resistance', amp: 1 }
        ],
        'born_in_chaos_v1:zombie_bruiser': [
            { id: 'minecraft:strength', amp: 0 },
            { id: 'minecraft:resistance', amp: 0 }
        ],
        'born_in_chaos_v1:fallen_chaos_knight': [
            { id: 'minecraft:strength', amp: 1 },
            { id: 'minecraft:resistance', amp: 1 }
        ],
        'born_in_chaos_v1:mother_spider': [
            { id: 'minecraft:speed', amp: 0 }
        ],
        'born_in_chaos_v1:pumpkin_spirit': [
            { id: 'minecraft:fire_resistance', amp: 0 }
        ],
        'born_in_chaos_v1:krampus_henchman': [
            { id: 'minecraft:resistance', amp: 0 }
        ],
        'born_in_chaos_v1:krampus': [
            { id: 'minecraft:strength', amp: 1 },
            { id: 'minecraft:resistance', amp: 1 }
        ],
        'born_in_chaos_v1:sir_pumpkinhead': [
            { id: 'minecraft:strength', amp: 0 },
            { id: 'minecraft:resistance', amp: 1 }
        ],
        'born_in_chaos_v1:lord_pumpkinhead': [
            { id: 'minecraft:strength', amp: 1 },
            { id: 'minecraft:resistance', amp: 1 },
            { id: 'minecraft:fire_resistance', amp: 0 }
        ],
        'born_in_chaos_v1:nightmare_stalker': [
            { id: 'minecraft:strength', amp: 1 },
            { id: 'minecraft:resistance', amp: 1 }
        ],
        'born_in_chaos_v1:missioner': [
            { id: 'minecraft:strength', amp: 1 },
            { id: 'minecraft:resistance', amp: 1 },
            { id: 'minecraft:fire_resistance', amp: 0 }
        ]
    }

    const listaEfeitos = BUFFS[mobId]

    if (listaEfeitos) {
        listaEfeitos.forEach(ef => {
            entity.addEffect(new $MobEffectInstance(
                $MobEffects.get(ef.id),
                2147483647, // Duração infinita
                ef.amp,
                false,      // Sem partículas poluindo
                false
            ))
        })
    }
})