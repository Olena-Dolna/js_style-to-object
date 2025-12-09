'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const commands = sourceString.split(';');
  const commandsAndValues = commands.map((command) => command.split(':'));
  const mergedCommandsAndValues = commandsAndValues.reduce(
    (allCommands, command) => [...allCommands, ...command],
    []
  );
  const trimmedCommandsAndValues = mergedCommandsAndValues.map((command) =>
    command.trim()
  );
  const validCommandsAndValues = trimmedCommandsAndValues.filter(
    (command) => command.length > 0
  );
  const styleBlockOfCode = validCommandsAndValues.reduce(
    (styleBlock, word, index) => {
      if (index % 2 === 0) {
        styleBlock[word] = undefined;
      } else {
        styleBlock[validCommandsAndValues[index - 1]] = word;
      }

      return styleBlock;
    },
    {}
  );

  return styleBlockOfCode;
}

module.exports = convertToObject;
