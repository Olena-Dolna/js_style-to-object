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
  const result = {};

  for (let i = 0; i < validCommandsAndValues.length - 1; i += 2) {
    result[validCommandsAndValues[i]] = validCommandsAndValues[i + 1];
  }

  return result;
}

module.exports = convertToObject;
