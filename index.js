const core = require('@actions/core');

function run() {
  try {
    const key = core.getInput('key');
    const json = core.getInput('json');

    const value = JSON.parse(json)[key];

    core.setOutput('value', JSON.stringify(value));
  } catch (err) {
    core.setFailed(err.message);
  }

}

run()
