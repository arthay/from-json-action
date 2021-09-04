const core = require('@actions/core');

function run() {
  try {
    const inputArray = JSON.parse(core.getInput('array'));
    const json = core.getInput('json');

    let value = JSON.parse(json);

    for (const item of inputArray) {
      if (value[item]) {
        value = value[item]
      }
    }

    core.setOutput('value', JSON.stringify(value));
  } catch (err) {
    core.setFailed(err.message);
  }

}

run()
