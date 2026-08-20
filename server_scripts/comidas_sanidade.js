// Tabela definitiva de cura de Sanidade (Vanilla + Survival Instinct + Farmer's Delight + Respite + Simply Tea)
const tabelaSanidadeComidas = {
    // ==========================================
    // 0. MINECRAFT VANILLA (Regras Customizadas)
    // ==========================================
    // Especiais / Divinas
    'minecraft:enchanted_golden_apple': 100,
    'minecraft:golden_apple': 100,
    
    // ==========================================
    // VEGGIES DELIGHT (Comidas Vegetarianas & Variados)
    // ==========================================
    // Ingredientes e Vegetais Crus (Cura Mínima: 2)
    'veggiesdelight:bellpepper': 2,
    'veggiesdelight:dandelion_leaf': 2,
    'veggiesdelight:broccoli': 2,
    'veggiesdelight:cauliflower': 2,
    'veggiesdelight:sweet_potato': 2,
    'veggiesdelight:turnip': 2,
    'veggiesdelight:zucchini': 2,
    'veggiesdelight:zucchini_slice': 2,

    // Vegetais Assados e Acompanhamentos Simples (Cura Pequena: 3 ~ 4)
    'veggiesdelight:baked_sweet_potato': 4,
    'veggiesdelight:smoked_bellpepper': 3,
    'veggiesdelight:roasted_cauliflower_floret': 3,
    'veggiesdelight:roasted_garlic_clove': 3,
    'veggiesdelight:roasted_zucchini': 3,
    'veggiesdelight:cooked_vegetarian_patty': 4,
    'veggiesdelight:turnip_mutton_skewer': 4,

    // Pães, Doces, Bolos e Fatia de Torta (Cura Média: 4 ~ 6)
    'veggiesdelight:cauliflower_bread': 4,
    'veggiesdelight:garlic_bread': 5,
    'veggiesdelight:beetroot_brownie': 4,
    'veggiesdelight:zucchini_quiche_slice': 5,
    'veggiesdelight:vegan_pizza_slice': 5,
    'veggiesdelight:carrot_cake_slice': 4,
    'veggiesdelight:sweet_potato_pie_slice': 4,
    'veggiesdelight:sweet_potato_cupcake': 4,

    // Sanduíches, Wraps e Lanches Elaborados (Cura Boa: 8 ~ 10)
    'veggiesdelight:vegetables_wrap': 8,
    'veggiesdelight:zucchini_sandwich': 8,
    'veggiesdelight:chicken_fajitas_wrap': 10,
    'veggiesdelight:vegetarian_burger': 10,
    'veggiesdelight:mhadjeb': 8,

    // Pratos Principais e Refeições Completas (Cura Alta: 14 ~ 16)
    'veggiesdelight:stuffed_zucchini_boat': 15,
    'veggiesdelight:stuffed_bellpepper': 15,
    'veggiesdelight:potato_noodle': 14,
    
    // Pães e Bolos (+1)
    'minecraft:bread': 1,
    'minecraft:cake': 1,

    // Carnes Assadas (+3)
    'minecraft:cooked_beef': 3,
    'minecraft:cooked_porkchop': 3,
    'minecraft:cooked_mutton': 3,
    'minecraft:cooked_chicken': 3,
    'minecraft:cooked_rabbit': 3,
    'minecraft:cooked_cod': 3,
    'minecraft:cooked_salmon': 3,

    // Carnes Crus (-5 Sanidade)
    'minecraft:beef': -5,
    'minecraft:porkchop': -5,
    'minecraft:mutton': -5,
    'minecraft:chicken': -5,
    'minecraft:rabbit': -5,
    'minecraft:cod': -5,
    'minecraft:salmon': -5,

    // ==========================================
    // 1. SURVIVAL INSTINCT (Sobrevivência & Enlatados)
    // ==========================================
    // Comidas Estragadas (Penalidade Forte: -10)
    'survivalinstinct:rotten_apple': -10,
    'survivalinstinct:rotten_orange': -10,

    // Lanches, Pacotes e Frutas Frescas (Cura Pequena: 3 ~ 4)
    'survivalinstinct:orange': 3,
    'survivalinstinct:carrots_package': 3,
    'survivalinstinct:cheese_chips': 4,
    'survivalinstinct:potato_chips': 4,
    'survivalinstinct:rice_cookie': 3,

    // Doces e Conforto (Cura Média: 6 ~ 8)
    'survivalinstinct:chocolate_bar': 8,

    // Enlatados e Rações de Sobrevivência (Cura Média/Boa: 8 ~ 12)
    'survivalinstinct:bean_can': 8,
    'survivalinstinct:fruit_can': 8,
    'survivalinstinct:sardine_can': 10,
    'survivalinstinct:meat_can': 10,
    'survivalinstinct:tomato_soup': 12,
    'survivalinstinct:mre': 15, // Ração Militar Completa

    // Bebidas e Refrigerantes (Cura Rápida: 5 ~ 7)
    'survivalinstinct:apple_juice': 5,
    'survivalinstinct:orange_juice': 5,
    'survivalinstinct:blue_soda': 6,
    'survivalinstinct:lemon_soda': 6,
    'survivalinstinct:red_soda': 6,
    'survivalinstinct:milk': 5,
    'survivalinstinct:beer': 7, // Um gole para relaxar os nervos

    // ==========================================
    // 2. BEBIDAS, CHÁS E CAFÉS (Farmer's + Simply Tea)
    // ==========================================
    'farmersdelight:apple_cider': 5,
    'farmersdelight:bone_broth': 5,
    'farmersdelight:hot_cocoa': 5,
    'farmersdelight:melon_juice': 5,
    'farmersdelight:milk_bottle': 5,
    
    'farmersrespite:black_tea': 8,
    'farmersrespite:coffee': 8,
    'farmersrespite:dandelion_tea': 8,
    'farmersrespite:gamblers_tea': 8,
    'farmersrespite:green_tea': 8,
    'farmersrespite:purulent_tea': 8,
    'farmersrespite:rose_hip_tea': 8,
    'farmersrespite:yellow_tea': 8,
    
    'simplytea:cup_cocoa': 8,
    'simplytea:cup_tea_black': 8,
    'simplytea:cup_tea_chai': 8,
    'simplytea:cup_tea_chorus': 8,
    'simplytea:cup_tea_floral': 8,
    'simplytea:cup_tea_green': 8,
    'simplytea:cup_tea_iced': 8,
    
    'farmersrespite:long_apple_cider': 12,
    'farmersrespite:long_black_tea': 12,
    'farmersrespite:long_coffee': 12,
    'farmersrespite:long_dandelion_tea': 12,
    'farmersrespite:long_gamblers_tea': 12,
    'farmersrespite:long_green_tea': 12,
    'farmersrespite:long_purulent_tea': 12,
    'farmersrespite:long_rose_hip_tea': 12,
    'farmersrespite:long_yellow_tea': 12,
    
    'farmersrespite:strong_apple_cider': 15,
    'farmersrespite:strong_black_tea': 15,
    'farmersrespite:strong_coffee': 15,
    'farmersrespite:strong_gamblers_tea': 15,
    'farmersrespite:strong_green_tea': 15,
    'farmersrespite:strong_hot_cocoa': 15,
    'farmersrespite:strong_melon_juice': 15,
    'farmersrespite:strong_purulent_tea': 15,
    'farmersrespite:strong_rose_hip_tea': 15,
    'farmersrespite:strong_yellow_tea': 15,

    // ==========================================
    // 3. LANCHES RÁPIDOS E PETISCOS
    // ==========================================
    'farmersdelight:apple_pie_slice': 4,
    'farmersdelight:cake_slice': 4,
    'farmersdelight:chocolate_pie_slice': 4,
    'farmersdelight:pumpkin_pie_slice': 4,
    'farmersdelight:sweet_berry_cheesecake_slice': 4,
    'farmersrespite:coffee_cake_slice': 4,
    'farmersrespite:rose_hip_pie_slice': 4,

    'farmersdelight:bacon': 3,
    'farmersdelight:barbecue_stick': 3,
    'farmersdelight:beef_patty': 3,
    'farmersdelight:cabbage_leaf': 3,
    'farmersdelight:cabbage_rolls': 3,
    'farmersdelight:chicken_cuts': 3,
    'farmersdelight:cod_roll': 3,
    'farmersdelight:cod_slice': 3,
    'farmersdelight:cooked_bacon': 3,
    'farmersdelight:cooked_chicken_cuts': 3,
    'farmersdelight:cooked_cod_slice': 3,
    'farmersdelight:cooked_mutton_chops': 3,
    'farmersdelight:cooked_salmon_slice': 3,
    'farmersdelight:fried_egg': 3,
    'farmersdelight:honey_cookie': 3,
    'farmersdelight:kelp_roll': 3,
    'farmersdelight:kelp_roll_slice': 3,
    'farmersdelight:melon_popsicle': 3,
    'farmersdelight:mutton_chops': 3,
    'farmersdelight:pumpkin_slice': 3,
    'farmersdelight:salmon_roll': 3,
    'farmersdelight:salmon_slice': 3,
    'farmersdelight:sweet_berry_cookie': 3,
    'farmersrespite:green_tea_cookie': 3,
    
    'farmersdelight:minced_beef': 2,
    'farmersdelight:tomato_sauce': 2,
    'farmersrespite:nether_wart_sourdough': 2,

    // ==========================================
    // 4. SANDUÍCHES E SALADAS
    // ==========================================
    'farmersdelight:bacon_sandwich': 8,
    'farmersdelight:chicken_sandwich': 8,
    'farmersdelight:egg_sandwich': 7,
    'farmersdelight:fruit_salad': 6,
    'farmersdelight:gleaming_salad': 9,
    'farmersdelight:hamburger': 10,
    'farmersdelight:mixed_salad': 6,
    'farmersdelight:mutton_wrap': 8,
    'farmersdelight:nether_salad': 7,

    // ==========================================
    // 5. GRANDES REFEIÇÕES E SOPAS
    // ==========================================
    'farmersdelight:bacon_and_eggs': 15,
    'farmersdelight:baked_cod_stew': 16,
    'farmersdelight:beef_stew': 18,
    'farmersdelight:chicken_soup': 16,
    'farmersdelight:cooked_rice': 12,
    'farmersdelight:dumplings': 14,
    'farmersdelight:fish_stew': 16,
    'farmersdelight:fried_rice': 15,
    'farmersdelight:glow_berry_custard': 14,
    'farmersdelight:grilled_salmon': 16,
    'farmersdelight:honey_glazed_ham': 20,
    'farmersdelight:mushroom_rice': 14,
    'farmersdelight:noodle_soup': 18,
    'farmersdelight:onion_soup': 14,
    'farmersdelight:pasta_with_meatballs': 20,
    'farmersdelight:pasta_with_mutton_chop': 20,
    'farmersdelight:pumpkin_soup': 15,
    'farmersdelight:ratatouille': 16,
    'farmersdelight:roast_chicken': 20,
    'farmersdelight:roasted_mutton_chops': 18,
    'farmersdelight:shepherds_pie': 22,
    'farmersdelight:squid_ink_pasta': 18,
    'farmersdelight:steak_and_potatoes': 20,
    'farmersdelight:stuffed_potato': 15,
    'farmersdelight:stuffed_pumpkin': 22,
    'farmersdelight:vegetable_noodles': 16,
    'farmersdelight:vegetable_soup': 15,
    
    'farmersrespite:black_cod': 18,
    'farmersrespite:blazing_chili': 16,
    'farmersrespite:tea_curry': 18
};

ItemEvents.foodEaten(event => {
    const { item, player, server } = event;
    const itemId = item.id;

    if (itemId in tabelaSanidadeComidas) {
        let valorCura = tabelaSanidadeComidas[itemId];
        
        // Aplica o ajuste de sanidade (seja positivo ou negativo)
        if (valorCura < 0) {
            // Se for negativo, remove sanidade (o mod Sanity costuma aceitar 'subtract' ou valor negativo com 'add')
            server.runCommandSilent(`sanity add ${player.username} ${valorCura}`);
            player.sendSystemMessage(Text.of('O gosto repulsivo desta comida perturba sua mente...').darkRed());
        } else {
            server.runCommandSilent(`sanity add ${player.username} ${valorCura}`);
            
            // Mensagens dinâmicas de acordo com o valor
            if (valorCura >= 50) {
                player.sendSystemMessage(Text.of('Uma bênção radiante limpa completamente sua mente de todo o terror!').gold());
            } else if (valorCura >= 18) {
                player.sendSystemMessage(Text.of('Uma refeição magnífica! O calor da comida afasta seus piores temores.').yellow());
            } else if (valorCura >= 8) {
                player.sendSystemMessage(Text.of('Você sente o aconchego do alimento acalmar seus pensamentos inquietos.').gold());
            } else {
                player.sendSystemMessage(Text.of('Um pequeno conforto em meio à escuridão.').gray());
            }
        }
    }
});