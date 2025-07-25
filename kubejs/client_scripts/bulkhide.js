JEIEvents.hideItems(event => {
    event.hide(/^sophisticatedstorage:limited.+barrel.+$/)
    event.hide("sophisticatedstorage:copper_barrel")
    event.hide("sophisticatedstorage:copper_chest")
    event.hide("sophisticatedstorage:copper_shulker_box")
    event.hide(/^sophisticatedstorage:.*copper.*tier_upgrade$/)
    event.hide("sophisticatedstorage:stack_upgrade_tier_1_plus")
    event.hide("sophisticatedbackpacks:stack_upgrade_omega_tier")
    event.hide("sophisticatedbackpacks:inception_upgrade")
    event.hide(/xp_pump_upgrade/)

    event.hide(/itemfilters/)

    event.hide(["ae2:inscriber", "ae2:vibration_chamber"])
    event.hide(/ae2:.*_budding_quartz/)
    event.hide("ae2:small_quartz_bud")
    event.hide("ae2:medium_quartz_bud")
    event.hide("ae2:large_quartz_bud")
    event.hide("ae2:quartz_cluster")

    event.hide("architects_palette:withered_bone")

    let begoneEarth = [
        "tier_1_rover", "tier_2_rocket", "tier_3_rocket", "tier_4_rocket",
        "steel_cable", "desh_cable", "desh_fluid_pipe", "ostrum_fluid_pipe", "cable_duct", "fluid_pipe_duct",
        "coal_generator", "compressor", "etrionic_blast_furnace", "nasa_workbench", "fuel_refinery",
        "water_pump", "energizer", "cryo_freezer",
        "etrionic_capacitor",
        "oxygen_gear", "wheel", "engine_frame", "fan", "rocket_nose_cone", "rocket_fin",
        "etrionic_core", "photovoltaic_vesnium_cell",
        "infernal_spire_block", "sky_stone",
        "iron_plate",
        "cryo_fuel_bucket"
    ]
    event.hide(begoneEarth.map(begone=>{return `ad_astra:${begone}`}))

    event.hide(/^ad_astra:(netherite_space|jet_suit)_(helmet|suit|pants|boots)$/)
    event.hide("ad_astra:jet_suit")
    event.hide(/^ad_astra:(steel|desh|ostrum|calorite)_(tank|engine)$/)
    event.hide(/ad_astra:.*mars/)
    event.hide(/ad_astra:.*venus/)
    event.hide(/ad_astra:.*mercury/)
    event.hide(/ad_astra:.*glacio/)
    event.hide(/^ad_astra:(?!photovoltaic).*(ostrum|calorite|etrium).*/)
    event.hide(/^ad_astra:.*conglomerate.*/)
    event.hide(/^ad_astra:.*permafrost.*/)
    event.hide(/^(ad_astra|everycomp|supplementaries):.*(aeronos|strophar|glacian).*/)
    event.hide(["ad_astra:deepslate_desh_ore", "ad_astra:deepslate_ice_shard_ore"])

    event.hide("biomesoplenty:blood")

    event.hide("create:crushed_raw_tin")
    event.hide("create:crushed_raw_osmium")
    event.hide("create:crushed_raw_platinum")
    event.hide("create:crushed_raw_silver")
    event.hide("create:crushed_raw_quicksilver")
    event.hide("create:crushed_raw_aluminum")
    event.hide("create:crushed_raw_uranium")
    event.hide("create:sturdy_sheet")
    event.hide("create:unprocessed_obsidian_sheet")

    event.hide(/^createdeco:.*coin/)

    event.hide(/incomplete/)
    event.hide(/kubejs:growing/)
    event.hide(/kubejs:failed/)
    event.hide("kubejs:silver_coin")
    event.hide("kubejs:gold_coin")

    event.hide("decorative_blocks:blockstate_copy_item")

    // event.hide("occultism:obsidian_dust")
    // event.hide("occultism:raw_silver")
    // event.hide("occultism:silver_ingot")
    // event.hide("occultism:silver_nugget")
    // event.hide("occultism:silver_ore")
    // event.hide("occultism:silver_ore_deepslate")
    // event.hide("occultism:iron_dust")
    // event.hide("occultism:gold_dust")
    // event.hide("occultism:copper_dust")
    // event.hide("occultism:silver_dust")
    // event.hide("occultism:debug_foliot_lumberjack")
    // event.hide("occultism:debug_foliot_transport_items")
    // event.hide("occultism:debug_foliot_cleaner")
    // event.hide("occultism:debug_foliot_trader")
    // event.hide("occultism:debug_djinni_manage_machine")
    // event.hide("occultism:debug_djinni_test")
    // event.hide("occultism:lighted_air")
    // event.hide("occultism:jei_dummy/none")
    // event.hide("occultism:jei_dummy/require_sacrifice")
    // event.hide("occultism:jei_dummy/require_item_use")

    event.hide("prettypipes:blank_module")

    event.hide("projectred_core:ruby")
    event.hide("projectred_core:sapphire")
    event.hide("projectred_core:peridot")
    event.hide("projectred_core:electrotine_ingot")
    event.hide("projectred_core:electrotine_dust")
    event.hide("projectred_core:electrotine_iron_comp")
    event.hide("projectred_core:conductive_plate")
    event.hide("projectred_core:wired_plate")
    event.hide("projectred_core:bundled_plate")
    event.hide("projectred_core:anode")
    event.hide("projectred_core:cathode")
    event.hide("projectred_core:pointer")
    event.hide("projectred_core:silicon_chip")
    event.hide("projectred_core:energized_silicon_chip")
    event.hide("projectred_core:red_iron_comp")
    event.hide("projectred_core:sand_coal_comp")
    event.hide("projectred_core:boule")
    event.hide("projectred_core:silicon")
    event.hide("projectred_core:red_silicon_comp")
    event.hide("projectred_core:glow_silicon_comp")
    event.hide("projectred_core:electrotine_silicon_comp")
    event.hide("projectred_core:infused_silicon")
    event.hide("projectred_core:energized_silicon")
    event.hide("projectred_core:electrotine_silicon")
    event.hide("projectred_core:copper_coil")
    event.hide("projectred_core:iron_coil")
    event.hide("projectred_core:gold_coil")
    event.hide("projectred_core:motor")
    event.hide("projectred_core:woven_cloth")
    event.hide("projectred_core:sail")
    event.hide("projectred_core:draw_plate")
    event.hide("projectred_core:multimeter")

    event.hide("projectred_transmission:low_load_power_wire")
    event.hide("projectred_transmission:low_load_framed_power_wire")

    event.hide("thermal:rs_control_augment")
    event.hide("thermal:side_config_augment")
    event.hide("thermal:press_coin_die")
    event.hide("thermal:press_gear_die")
    event.hide("thermal:press_packing_2x2_die")
    event.hide("thermal:press_packing_3x3_die")
    event.hide("thermal:press_unpacking_die")
    event.hide("thermal:iron_coin")
    event.hide("thermal:copper_coin")
    event.hide("thermal:tin_coin")
    event.hide("thermal:lead_coin")
    event.hide("thermal:nickel_coin")
    event.hide("thermal:netherite_coin")
    event.hide("thermal:bronze_coin")
    event.hide("thermal:constantan_coin")
    event.hide("thermal:invar_coin")
    event.hide("thermal:electrum_coin")
    event.hide("thermal:signalum_coin")
    event.hide("thermal:lumium_coin")
    event.hide("thermal:enderium_coin")
    event.hide("thermal:gold_plate")
    event.hide("thermal:iron_plate")
    event.hide("thermal:copper_plate")
    event.hide("thermal:netherite_plate")
    event.hide("thermal:silver_ore")
    event.hide("thermal:deepslate_silver_ore")
    event.hide("thermal:tin_ore")
    event.hide("thermal:deepslate_tin_ore")
    event.hide("thermal:tin_nugget")
    event.hide("thermal:tin_ingot")
    event.hide("thermal:tin_block")
    event.hide("thermal:tin_dust")
    event.hide("thermal:tin_plate")
    event.hide("thermal:tin_gear")
    event.hide("thermal:raw_tin")
    event.hide("thermal:raw_tin_block")
    event.hide("thermal:netherite_nugget")
    event.hide("thermal:copper_nugget")
    event.hide("thermal:ender_pearl_dust")
    event.hide("thermal:servo_attachment")
    event.hide("thermal:device_hive_extractor")

    event.hide("cb_microblock:microblock")
    event.hide("ae2:facade")
    event.hide("chiselsandbits:block_bit")

    event.hide("trials:crafter")
})

JEIEvents.hideFluids(event => {
    event.hide("tconstruct:molten_tin")
    event.hide("ad_astra:cryo_fuel")
})
