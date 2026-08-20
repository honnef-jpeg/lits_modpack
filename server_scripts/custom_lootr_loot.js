LootJS.modifiers(event => {

    // --- MUNIÇÕES DO TACZ ---
    const MUNICOES_TACZ = [
        Item.of('tacz:ammo', '{AmmoId:"tacz:9mm"}'),
        Item.of('tacz:ammo', '{AmmoId:"tacz:45acp"}'),
        Item.of('tacz:ammo', '{AmmoId:"tacz:556x45"}'),
        Item.of('tacz:ammo', '{AmmoId:"tacz:762x54"}')
    ]

    // --- RECURSOS E RECOMPONSAS ---
    const RECURSOS = [
        Item.of('minecraft:iron_ingot'),
        Item.of('minecraft:copper_ingot'),
        Item.of('minecraft:gold_ingot'),
        Item.of('minecraft:iron_nugget'),
        Item.of('minecraft:gunpowder')
    ]

    const COMIDAS = [
        Item.of('farmersdelight:cabbage'),
        Item.of('farmersdelight:tomato'),
        Item.of('farmersdelight:onion'),
        Item.of('farmersdelight:rice'),
        Item.of('minecraft:apple'),
        Item.of('minecraft:carrot'),
        Item.of('minecraft:potato')
    ]

    // Modificador principal para baús de estruturas/dungeons
    event.addLootTypeModifier(LootType.CHEST)
        
        // 1. Munição do TaCZ (50% de chance de gerar entre 8 e 20 unidades)
        .randomChance(0.50)
        .addLoot(
            LootEntry.of(MUNICOES_TACZ[Math.floor(Math.random() * MUNICOES_TACZ.length)])
                .limitCount(8, 20)
        )

        // 2. Minérios e Pólvora (65% de chance de gerar entre 2 e 6 unidades)
        .randomChance(0.65)
        .addLoot(
            LootEntry.of(RECURSOS[Math.floor(Math.random() * RECURSOS.length)])
                .limitCount(2, 6)
        )

        // 3. Vegetais e Frutas (60% de chance de gerar entre 1 e 4 unidades)
        .randomChance(0.60)
        .addLoot(
            LootEntry.of(COMIDAS[Math.floor(Math.random() * COMIDAS.length)])
                .limitCount(1, 4)
        )
})