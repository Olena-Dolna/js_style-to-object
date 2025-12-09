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
    (allValues, array) => [...allValues, ...array],
    []
  );
  const trimmedCommandsAndValues = mergedCommandsAndValues.map((command) =>
    command.trim()
  );
  const validCommandsAndValues = trimmedCommandsAndValues.filter(
    (command) => command.length > 0
  );

  const result = validCommandsAndValues.reduce((styleObject, word, index) => {
    if (index % 2 === 0) {
      styleObject[word] = undefined;
    } else {
      styleObject[validCommandsAndValues[index - 1]] = word;
    }

    return styleObject;
  }, {});

  return result;
}

module.exports = convertToObject;
