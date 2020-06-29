// Import Modules
import { DragonsHuntersActor } from "./actor/actor.js";
import { DragonsHuntersActorSheet } from "./actor/actor-sheet.js";
import { DragonsHuntersItem } from "./item/item.js";
import { DragonsHuntersItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.dragonshunters = {
    DragonsHuntersActor,
    DragonsHuntersItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = DragonsHuntersActor;
  CONFIG.Item.entityClass = DragonsHuntersItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("dragonshunters", DragonsHuntersActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("dragonshunters", DragonsHuntersItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});