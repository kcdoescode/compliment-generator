function generateCompliment() {
  const name = document.getElementById('nameInput').value.trim();

  if (name === "") {
    document.getElementById('result').innerText = "Please enter your name first 😅";
    return;
  }

  let displayName = name;

  if (name.toLowerCase() === "pavan1519") {
    displayName = "My Princess 👑";
    const specialCompliments = [
      `${displayName}, you're like Zoro with directions and Luffy with feelings... lost but still making me smile 😤❤️`,
      `${displayName}, you’ve got Luffy’s chaos and Zoro’s stubbornness... my brain says run but my heart stays like a Straw Hat on a windy day 😤❤️`,
      `${displayName}, you act all cold like Zoro but you're soft like Luffy when no one's watching 😏❤️`
    ];
    const randomSpecial = Math.floor(Math.random() * specialCompliments.length);
    document.getElementById('result').innerText = specialCompliments[randomSpecial];
    return;
  }

  const compliments = [
    `${displayName}, your spirit shines brighter than Luffy’s straw hat! 🎩✨`,
    `${displayName}, you’ve got the heart of a Straw Hat captain! 🏴‍☠️❤️`,
    `${displayName}, your determination rivals Luffy’s Gear 1 willpower! 💪🔥`,
    `${displayName}, your loyalty is as unshakeable as Zoro's swords! ⚔️💚`,
    `${displayName}, you're as focused as three-sword style Zoro in battle! 🗡️😤`,
    `${displayName}, even Mihawk would nod at your discipline! 😤🗡️`,
    `${displayName}, you’ve got Sanji-level charm and class! 🍳💛`,
    `${displayName}, your kindness matches Nami’s caring heart! 💰🧡`,
    `${displayName}, you’re as clever as Usopp when it counts! 🎯✨`,
    `${displayName}, you dream big like Robin uncovering history! 📚🌿`,
    `${displayName}, your creativity rivals Franky’s ship designs! 🔧🚢`,
    `${displayName}, you’re as optimistic as Chopper’s big heart! 🦌❤️`,
    `${displayName}, your energy lights up rooms like Going Merry! ⛵✨`,
    `${displayName}, you’ve got Brook’s upbeat musician soul! 🎶💀`,
    `${displayName}, your courage beats Buggy’s showmanship! 🎈😎`,
    `${displayName}, your resolve is as strong as Arlong’s defeat! 🦈⚔️`,
    `${displayName}, you’re as brave as Luffy facing Marineford! 🔥🏴‍☠️`,
    `${displayName}, your loyalty beats even Usopp’s bravest lies! 🎯💪`,
    `${displayName}, you’re as quick-thinking as Sanji in a kitchen crisis! 🍳🔥`,
    `${displayName}, your spirit is as free as Robin exploring ruins! 🧳✨`,
    `${displayName}, your innovation is higher than Franky’s blueprints! 🔩💥`,
    `${displayName}, your optimism is stronger than Luffy’s endless dream! ☀️🏴‍☠️`,
    `${displayName}, you’re as dependable as Zoro guarding the crew! ⚔️💚`,
    `${displayName}, your energy is as fiery as a Sanji kick! 🔥👞`,
    `${displayName}, your bravery stands tall like a Straw Hat flag! 🏳️✨`,
    `${displayName}, your smile is brighter than Going Merry’s sails! ⛵😊`,
    `${displayName}, your chill vibe is like Usopp storytelling by firelight! 🔥🎯`,
    `${displayName}, your sense of adventure is pure Grand Line energy! 🌊✨`,
    `${displayName}, you’re as bold as Luffy declaring war! 🔥🏴‍☠️`,
    `${displayName}, your strength is as silent but deadly as Zoro! ⚔️😤`,
    `${displayName}, your kindness hits like Chopper’s heartwarming advice! 🦌❤️`,
    `${displayName}, you’re as creative as Robin deciphering Poneglyphs! 📜✨`,
    `${displayName}, your taste is as refined as Sanji’s cuisine! 🍳🍷`,
    `${displayName}, your laughter is as infectious as Brook’s music! 🎶😂`,
    `${displayName}, your style is as cool as Franky’s sunglasses! 😎🔧`,
    `${displayName}, your leadership screams future Pirate King! 👑🏴‍☠️`,
    `${displayName}, you’re as fearless as a full-power Luffy punch! 👊🔥`,
    `${displayName}, your ambition radiates like pirate flags at sea! 🏴‍☠️🔥`,
    `${displayName}, your perseverance is legendary like the Straw Hat crew! 👑⚔️`,
    `${displayName}, your confidence roars like a pirate cannon! 💥🏴‍☠️`,
    `${displayName}, your heart is as big as the Grand Line horizon! 🌊❤️`,
    `${displayName}, you’re as unforgettable as Luffy’s first bounty! 💰🏴‍☠️`,
    `${displayName}, you bring the chaos like Luffy at a buffet! 🍖💥`,
    `${displayName}, you’re as moody and dangerous as Zoro after getting lost! 😤🗡️`,
    `${displayName}, your loyalty is as chaotic as Sanji ignoring orders for a girl 😏🍳`,
    `${displayName}, you’re as dramatic as Usopp telling battle stories 🎯😂`,
    `${displayName}, your patience is like Chopper around compliments... non-existent 😳🦌`
  ];

  const randomIndex = Math.floor(Math.random() * compliments.length);
  document.getElementById('result').innerText = compliments[randomIndex];
}
