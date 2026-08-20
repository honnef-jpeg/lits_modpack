EntityJSEvents.attributes(event => {

    // --- ESQUELETOS & OSSOS ---
    event.modify('born_in_chaos_v1:decrepit_skeleton', attr => { attr.add('minecraft:generic.max_health', 80); attr.add('minecraft:generic.armor', 4) })
    event.modify('born_in_chaos_v1:skeleton_demoman', attr => { attr.add('minecraft:generic.max_health', 80); attr.add('minecraft:generic.armor', 4) })
    event.modify('born_in_chaos_v1:baby_skeleton', attr => { attr.add('minecraft:generic.max_health', 30) })
    event.modify('born_in_chaos_v1:bone_imp', attr => { attr.add('minecraft:generic.max_health', 30) })
    event.modify('born_in_chaos_v1:siamese_skeletons', attr => { attr.add('minecraft:generic.max_health', 30) })
    event.modify('born_in_chaos_v1:skeleton_thrasher', attr => { attr.add('minecraft:generic.max_health', 150); attr.add('minecraft:generic.armor', 10) })
    event.modify('born_in_chaos_v1:bonescaller', attr => { attr.add('minecraft:generic.max_health', 150); attr.add('minecraft:generic.armor', 8) })
    event.modify('born_in_chaos_v1:supreme_bonescaller', attr => { attr.add('minecraft:generic.max_health', 250); attr.add('minecraft:generic.armor', 12) })

    // --- ZUMBIS & INFECTADOS ---
    event.modify('born_in_chaos_v1:decaying_zombie', attr => { attr.add('minecraft:generic.max_health', 90); attr.add('minecraft:generic.armor', 4) })
    event.modify('born_in_chaos_v1:barrel_zombie', attr => { attr.add('minecraft:generic.max_health', 80); attr.add('minecraft:generic.armor', 6) })
    event.modify('born_in_chaos_v1:door_knight', attr => { attr.add('minecraft:generic.max_health', 100); attr.add('minecraft:generic.armor', 12) })
    event.modify('born_in_chaos_v1:zombie_clown', attr => { attr.add('minecraft:generic.max_health', 80); attr.add('minecraft:generic.armor', 4) })
    event.modify('born_in_chaos_v1:zombie_fisherman', attr => { attr.add('minecraft:generic.max_health', 80); attr.add('minecraft:generic.armor', 4) })
    event.modify('born_in_chaos_v1:zombie_lumberjack', attr => { attr.add('minecraft:generic.max_health', 100); attr.add('minecraft:generic.armor', 6) })
    event.modify('born_in_chaos_v1:zombie_bruiser', attr => { attr.add('minecraft:generic.max_health', 150); attr.add('minecraft:generic.armor', 10) })
    event.modify('born_in_chaos_v1:fallen_chaos_knight', attr => { attr.add('minecraft:generic.max_health', 200); attr.add('minecraft:generic.armor', 14) })
    event.modify('born_in_chaos_v1:lifestealer', attr => { attr.add('minecraft:generic.max_health', 200); attr.add('minecraft:generic.armor', 8) })

    // --- INSETOS, FAUNA & ARANHAS ---
    event.modify('born_in_chaos_v1:corpse_fly', attr => { attr.add('minecraft:generic.max_health', 20) })
    event.modify('born_in_chaos_v1:bloody_gadfly', attr => { attr.add('minecraft:generic.max_health', 20) })
    event.modify('born_in_chaos_v1:swarmer', attr => { attr.add('minecraft:generic.max_health', 40) })
    event.modify('born_in_chaos_v1:diamond_termite', attr => { attr.add('minecraft:generic.max_health', 25); attr.add('minecraft:generic.armor', 8) })
    event.modify('born_in_chaos_v1:baby_spider', attr => { attr.add('minecraft:generic.max_health', 25) })
    event.modify('born_in_chaos_v1:mother_spider', attr => { attr.add('minecraft:generic.max_health', 150); attr.add('minecraft:generic.armor', 8) })
    event.modify('born_in_chaos_v1:dread_hound', attr => { attr.add('minecraft:generic.max_health', 30) })
    event.modify('born_in_chaos_v1:dire_hound_leader', attr => { attr.add('minecraft:generic.max_health', 150); attr.add('minecraft:generic.armor', 6) })
    event.modify('born_in_chaos_v1:thornshell_crab', attr => { attr.add('minecraft:generic.max_health', 50); attr.add('minecraft:generic.armor', 10) })
    event.modify('born_in_chaos_v1:corpse_fish', attr => { attr.add('minecraft:generic.max_health', 25) })
    event.modify('born_in_chaos_v1:glutton_fish', attr => { attr.add('minecraft:generic.max_health', 120); attr.add('minecraft:generic.armor', 6) })

    // --- ESPÍRITOS & FANTASMAS ---
    event.modify('born_in_chaos_v1:spirit_guide', attr => { attr.add('minecraft:generic.max_health', 50) })
    event.modify('born_in_chaos_v1:restless_spirit', attr => { attr.add('minecraft:generic.max_health', 40) })
    event.modify('born_in_chaos_v1:scarlet_persecutor', attr => { attr.add('minecraft:generic.max_health', 80); attr.add('minecraft:generic.armor', 4) })
    event.modify('born_in_chaos_v1:phatom_creeper', attr => { attr.add('minecraft:generic.max_health', 40) })
    event.modify('born_in_chaos_v1:dark_vortex', attr => { attr.add('minecraft:generic.max_health', 50) })
    event.modify('born_in_chaos_v1:infernal_spirit', attr => { attr.add('minecraft:generic.max_health', 120); attr.add('minecraft:generic.armor', 6) })

    // --- EVENTO PUMPKIN & KRAMPUS ---
    event.modify('born_in_chaos_v1:mr_pumpkin', attr => { attr.add('minecraft:generic.max_health', 25) })
    event.modify('born_in_chaos_v1:senor_pumpkin', attr => { attr.add('minecraft:generic.max_health', 50) })
    event.modify('born_in_chaos_v1:mrs_pumpkin', attr => { attr.add('minecraft:generic.max_health', 80) })
    event.modify('born_in_chaos_v1:pumpkin_spirit', attr => { attr.add('minecraft:generic.max_health', 100); attr.add('minecraft:generic.armor', 6) })
    event.modify('born_in_chaos_v1:pumpkin_bruiser', attr => { attr.add('minecraft:generic.max_health', 150); attr.add('minecraft:generic.armor', 10) })
    event.modify('born_in_chaos_v1:sir_pumpkinhead', attr => { attr.add('minecraft:generic.max_health', 250); attr.add('minecraft:generic.armor', 12) })
    event.modify('born_in_chaos_v1:lord_pumpkinhead', attr => { attr.add('minecraft:generic.max_health', 1000); attr.add('minecraft:generic.armor', 16) })
    event.modify('born_in_chaos_v1:krampus_henchman', attr => { attr.add('minecraft:generic.max_health', 100); attr.add('minecraft:generic.armor', 6) })
    event.modify('born_in_chaos_v1:krampus', attr => { attr.add('minecraft:generic.max_health', 400); attr.add('minecraft:generic.armor', 12) })

    // --- NINETMARE STALKER & MISSIONER (PESADOS) ---
    event.modify('born_in_chaos_v1:nightmare_stalker', attr => { attr.add('minecraft:generic.max_health', 500); attr.add('minecraft:generic.armor', 15) })
    event.modify('born_in_chaos_v1:missioner', attr => { attr.add('minecraft:generic.max_health', 500); attr.add('minecraft:generic.armor', 15) })
})