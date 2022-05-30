import React, { useState } from "react";

export default function Character() {
  const [character, setCharacter] = useState({});
  function newCharacter() {
    let createdCharacter = {
      charName: "",
      dnd_class: "",
      stats: {},
    };

    let charNames = [
      "Scott",
      "Anoke",
      "Nicholas",
      "Andy",
      "Quinn",
      "Carmel",
      "Jesse",
      "Anthony",
      "Michelle",
      "Anton",
      "Zach",
      "Joseph",
      "Dennis",
    ];

    let titles = [
      "the Great",
      "the Powerful",
      "the Weak",
      "the Shy",
      "the Ferocious",
      "the Programmer",
      "the Beautiful",
      "the Darkness ",
      "the Everlasting Light",
      "the Cunning",
      "the Gladiator",
      "the Sly",
      "the Thief",
      "the Zealous",
      "the Mysterious",
    ];

    let classes = [
      "Wizard",
      "Rogue",
      "Mage",
      "Fighter",
      "Warlock",
      "Paladin",
      "Barbarian",
      "Cleric",
      "Druid",
    ];

    function rollStat() {
      let results = [];
      for (let i = 0; i < 4; i++) {
        results.push(Math.floor(Math.random() * 6) + 1);
      }

      results.sort((a, b) => {
        return b - a;
      });
      let stat = results[0] + results[1] + results[2];
      return stat;
    }

    function generateStats() {
      let generatedStats = {
        STR: rollStat(),
        DEX: rollStat(),
        CON: rollStat(),
        WIS: rollStat(),
        INT: rollStat(),
        CHA: rollStat(),
      };
      return generatedStats;
    }
    createdCharacter.charName =
      charNames[Math.floor(Math.random() * charNames.length)] +
      " " +
      titles[Math.floor(Math.random() * titles.length)];
    createdCharacter.dnd_class =
      classes[Math.floor(Math.random() * classes.length)];
    createdCharacter.stats = generateStats();

    setCharacter(createdCharacter);
  }

  return (
    <div className="container">
      <h1 className="charHeader">Generate a Random D&D Character</h1>
      <button className="button" onClick={newCharacter}>
        Create New Character
      </button>
      {character && (
        <div className="charBody">
          <p className="charInfo">Name: {character.charName}</p>

          <p className="charInfo">Class: {character.dnd_class}</p>

          {character.stats && (
            <div className="statsBody">
              <section className="statsTable">
                <table>
                  <thead>Stats:</thead>
                  <tr>
                    <th className="eachComponent">STR</th>
                    <th className="eachComponent">DEX</th>
                    <th className="eachComponent">CON</th>
                    <th className="eachComponent">WIS</th>
                    <th className="eachComponent">INT</th>
                    <th className="eachComponent">CHA</th>
                  </tr>
                  <tbody>
                    <td className="eachStat">{character.stats.STR}</td>
                    <td className="eachStat">{character.stats.DEX}</td>
                    <td className="eachStat">{character.stats.CON}</td>
                    <td className="eachStat">{character.stats.WIS}</td>
                    <td className="eachStat">{character.stats.INT}</td>
                    <td className="eachStat">{character.stats.CHA}</td>
                  </tbody>
                </table>
              </section>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
