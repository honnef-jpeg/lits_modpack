EntityJSEvents.attributes(event => {

    // --- BOSSES E MINIBOSSES VANILLA ---

    // Ender Dragon (Vida base vanilla: 200, Armadura base: 0)
    event.modify('minecraft:ender_dragon', attribute => {
        attribute.add('minecraft:generic.max_health', 1500) // Luta final mais longa
        attribute.add('minecraft:generic.armor', 20)
    })

    // Wither (Vida base vanilla: 300 no Java, Armadura base: 0)
    event.modify('minecraft:wither', attribute => {
        attribute.add('minecraft:generic.max_health', 800) // Boss invocável bem mais resistente
        attribute.add('minecraft:generic.armor', 15)
    })

    // Warden (Vida base vanilla: 500, Armadura base: 0, Ataque base: 30)
    event.modify('minecraft:warden', attribute => {
        attribute.add('minecraft:generic.max_health', 1000) // Ameaça quase imortal para forçar o stealth
        attribute.add('minecraft:generic.armor', 15)
    })

    // Elder Guardian (Vida base vanilla: 80, Armadura base: 0)
    event.modify('minecraft:elder_guardian', attribute => {
        attribute.add('minecraft:generic.max_health', 500) // Dobro de vida para valorizar o monumento aquático
        attribute.add('minecraft:generic.armor', 8)
    })
})