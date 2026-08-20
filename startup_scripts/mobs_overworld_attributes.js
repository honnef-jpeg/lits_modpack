EntityJSEvents.attributes(event => {
    
    // Lista de mobs do Overworld e seus novos valores BASE
    // Obs: Ao definir max_health como 40 (o padrao do zumbi e 20), ele tera o dobro de vida!
    
    // Zumbi (Vida base vanilla: 20, Armadura base vanilla: 2)
    event.modify('minecraft:zombie', attribute => {
        attribute.add('minecraft:generic.max_health', 40) // +50% de vida (30)
        attribute.add('minecraft:generic.armor', 6)      // +4 de armadura (2 + 4 = 6)
    })

    // Zumbi Aldeão (Vida base vanilla: 20, Armadura base vanilla: 2)
    event.modify('minecraft:zombie_villager', attribute => {
        attribute.add('minecraft:generic.max_health', 30)
        attribute.add('minecraft:generic.armor', 6)
    })

    // Afogado (Vida base vanilla: 20, Armadura base vanilla: 2)
    event.modify('minecraft:drowned', attribute => {
        attribute.add('minecraft:generic.max_health', 36)
        attribute.add('minecraft:generic.armor', 4)
    })

    // Esqueleto (Vida base vanilla: 20, Armadura base vanilla: 0)
    event.modify('minecraft:skeleton', attribute => {
        attribute.add('minecraft:generic.max_health', 35)
        attribute.add('minecraft:generic.armor', 6)
    })

    // Creeper (Vida base vanilla: 20, Armadura base vanilla: 0)
    event.modify('minecraft:creeper', attribute => {
        attribute.add('minecraft:generic.max_health', 26)
    })

    // Bruxa (Vida base vanilla: 26, Armadura base vanilla: 0)
    event.modify('minecraft:witch', attribute => {
        attribute.add('minecraft:generic.max_health', 50)
        attribute.add('minecraft:generic.armor', 8)
    })

    // Enderman
      event.modify('minecraft:enderman', attribute => {
        attribute.add('minecraft:generic.max_health', 60)
        attribute.add('minecraft:generic.armor', 10)
    })
})