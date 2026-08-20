EntityJSEvents.attributes(event => {

    // --- MOBS DO THE END ---

    // Enderman (Vida base: 40, Armadura base: 0)
    event.modify('minecraft:enderman', attribute => {
        attribute.add('minecraft:generic.max_health', 70) // Bastante vida para um mob perigoso
        attribute.add('minecraft:generic.armor', 6)
    })

    // Endermite (Vida base: 8, Armadura base: 0)
    event.modify('minecraft:endermite', attribute => {
        attribute.add('minecraft:generic.max_health', 18) // Deixa de morrer com 1 hit fraco
        attribute.add('minecraft:generic.armor', 2)
    })

    // Shulker (Vida base: 30, Armadura base: 0; Fecha a concha dando +20 de armadura nativa)
    event.modify('minecraft:shulker', attribute => {
        attribute.add('minecraft:generic.max_health', 50) 
        attribute.add('minecraft:generic.armor', 15)      // Armadura extra mesmo quando aberto
    })
})