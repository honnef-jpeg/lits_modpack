EntityJSEvents.attributes(event => {

    // --- MOBS DO NETHER ---

    // Piglin Comum (Vida base vanilla: 16, Armadura base vanilla: 0)
    event.modify('minecraft:piglin', attribute => {
        attribute.add('minecraft:generic.max_health', 32) // Dobro de vida
        attribute.add('minecraft:generic.armor', 4)      // +4 de armadura base
    })
    
    // Blaze (Vida base: 20, Armadura base: 0)
    event.modify('minecraft:blaze', attribute => {
        attribute.add('minecraft:generic.max_health', 40) // Vida dobrada
        attribute.add('minecraft:generic.armor', 4)      // +4 de Armadura
    })

    // Ghast (Vida base: 10, Armadura base: 0)
    event.modify('minecraft:ghast', attribute => {
        attribute.add('minecraft:generic.max_health', 25) // Ficou um pouco menos "de papel"
    })

    // Hoglin (Vida base: 40, Armadura base: 0)
    event.modify('minecraft:hoglin', attribute => {
        attribute.add('minecraft:generic.max_health', 80)
        attribute.add('minecraft:generic.armor', 6)
    })

    // Magma Cube (Vida base do grande: 16, Armadura base: 12)
    event.modify('minecraft:magma_cube', attribute => {
        attribute.add('minecraft:generic.max_health', 30)
        attribute.add('minecraft:generic.armor', 16)
    })

    // Piglin Brute (Vida base: 50, Armadura base: 0)
    event.modify('minecraft:piglin_brute', attribute => {
        attribute.add('minecraft:generic.max_health', 150) // Tank pesado dos bastiões
        attribute.add('minecraft:generic.armor', 15)
    })

    // Wither Skeleton (Vida base: 20, Armadura base: 0)
    event.modify('minecraft:wither_skeleton', attribute => {
        attribute.add('minecraft:generic.max_health', 60)
        attribute.add('minecraft:generic.armor', 10)
    })

    // Zombified Piglin (Vida base: 20, Armadura base: 2)
    event.modify('minecraft:zombified_piglin', attribute => {
        attribute.add('minecraft:generic.max_health', 50)
        attribute.add('minecraft:generic.armor', 8)
    })
})