EntityJSEvents.attributes(event => {

    // --- UNDEAD REVAMP 2: BUFFS DE HP E ARMADURA ---

    // Mobs Leves / Rápidos
    event.modify('undead_revamp2:therabidus', attr => { attr.add('minecraft:generic.max_health', 25) })
    event.modify('undead_revamp2:sucker', attr => { attr.add('minecraft:generic.max_health', 40) })
    event.modify('undead_revamp2:thehunter', attr => { attr.add('minecraft:generic.max_health', 50) })
    event.modify('undead_revamp2:thegliter', attr => { attr.add('minecraft:generic.max_health', 60) })

    // Mobs Intermediários / Médios
    event.modify('undead_revamp2:bomber', attr => { attr.add('minecraft:generic.max_health', 80); attr.add('minecraft:generic.armor', 4) })
    event.modify('undead_revamp2:therod', attr => { attr.add('minecraft:generic.max_health', 80); attr.add('minecraft:generic.armor', 4) })
    event.modify('undead_revamp2:thesmoker', attr => { attr.add('minecraft:generic.max_health', 80); attr.add('minecraft:generic.armor', 4) })
    event.modify('undead_revamp2:theswarmer', attr => { attr.add('minecraft:generic.max_health', 80); attr.add('minecraft:generic.armor', 4) })
    event.modify('undead_revamp2:the_moonflower', attr => { attr.add('minecraft:generic.max_health', 80); attr.add('minecraft:generic.armor', 4) })
    event.modify('undead_revamp2:theskeeper', attr => { attr.add('minecraft:generic.max_health', 80); attr.add('minecraft:generic.armor', 4) })
    event.modify('undead_revamp2:lechery', attr => { attr.add('minecraft:generic.max_health', 80); attr.add('minecraft:generic.armor', 4) })

    // Mobs Perigosos / Feras
    event.modify('undead_revamp2:thewolf', attr => { attr.add('minecraft:generic.max_health', 120); attr.add('minecraft:generic.armor', 6) })
    event.modify('undead_revamp2:thebeartamer', attr => { attr.add('minecraft:generic.max_health', 120); attr.add('minecraft:generic.armor', 6) })
    event.modify('undead_revamp2:thehorrors', attr => { attr.add('minecraft:generic.max_health', 150); attr.add('minecraft:generic.armor', 8) })
    event.modify('undead_revamp2:thehorrorsdecoys', attr => { attr.add('minecraft:generic.max_health', 150); attr.add('minecraft:generic.armor', 8) })
    event.modify('undead_revamp2:slaveman', attr => { attr.add('minecraft:generic.max_health', 150); attr.add('minecraft:generic.armor', 8) })
    event.modify('undead_revamp2:thedungeon', attr => { attr.add('minecraft:generic.max_health', 150); attr.add('minecraft:generic.armor', 8) })
    event.modify('undead_revamp2:thelurker', attr => { attr.add('minecraft:generic.max_health', 150); attr.add('minecraft:generic.armor', 8) })

    // Mobs Pesados / Tanks
    event.modify('undead_revamp2:theimmortal', attr => { attr.add('minecraft:generic.max_health', 200); attr.add('minecraft:generic.armor', 10) })
    event.modify('undead_revamp2:theposessive', attr => { attr.add('minecraft:generic.max_health', 200); attr.add('minecraft:generic.armor', 10) })
    event.modify('undead_revamp2:theheavy', attr => { attr.add('minecraft:generic.max_health', 250); attr.add('minecraft:generic.armor', 14) })
    event.modify('undead_revamp2:clogger', attr => { attr.add('minecraft:generic.max_health', 250); attr.add('minecraft:generic.armor', 14) })
    event.modify('undead_revamp2:thepregnant', attr => { attr.add('minecraft:generic.max_health', 250); attr.add('minecraft:generic.armor', 12) })
})