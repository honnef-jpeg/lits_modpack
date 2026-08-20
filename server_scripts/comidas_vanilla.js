ItemEvents.foodEaten(event => {
    const { item, player } = event
    const itemId = item.id

    // Função auxiliar para ajustar a sanidade (compatível com mods de sanidade via KubeJS/Player Data)
    function addSanity(amount) {
        // Tenta usar a integração padrão do mod Sanity via NBT/Data ou comando
        // Se o seu mod de sanidade usar uma tag/data específica, ajustamos o caminho abaixo:
        let currentSanity = player.persistentData.getInt('sanity') || 0
        player.persistentData.putInt('sanity', currentSanity + amount)
        
        // Exemplo alternativo via comando se o mod registrar comando direto:
        // event.server.runCommandSilent(`sanity add ${player.username} ${amount}`)
    }

    // 1. Pães e Bolos (+1 Sanidade)
    const paesEBolos = [
        'minecraft:bread',
        'minecraft:cake'
    ]
    if (paesEBolos.includes(itemId)) {
        addSanity(1)
    }

    // 2. Carnes Cruas (-5 Sanidade)
    const carnesCruas = [
        'minecraft:beef',
        'minecraft:porkchop',
        'minecraft:mutton',
        'minecraft:chicken',
        'minecraft:rabbit',
        'minecraft:cod',
        'minecraft:salmon'
    ]
    if (carnesCruas.includes(itemId)) {
        addSanity(-5)
    }

    // 3. Carnes Assadas (+3 Sanidade)
    const carnesAssadas = [
        'minecraft:cooked_beef',
        'minecraft:cooked_porkchop',
        'minecraft:cooked_mutton',
        'minecraft:cooked_chicken',
        'minecraft:cooked_rabbit',
        'minecraft:cooked_cod',
        'minecraft:cooked_salmon'
    ]
    if (carnesAssadas.includes(itemId)) {
        addSanity(3)
    }

    // 4. Maçã Dourada (+100 Sanidade)
    if (itemId === 'minecraft:golden_apple') {
        addSanity(100)
    }

    // 5. Maçã Encantada (+100 Sanidade)
    if (itemId === 'minecraft:enchanted_golden_apple') {
        addSanity(100)
    }
})