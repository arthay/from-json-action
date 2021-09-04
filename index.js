const core = require('@actions/core');

function run() {
  try {
    const inputKeys = core.getInput('keys');
    const json = core.getInput('json');

    let value = JSON.parse(json);
    const array = inputKeys.split(',').map(item => item.trim());

    for (const item of array) {
      if (value[item]) {
        value = value[item]
      }
    }
    //
    core.setOutput('value', JSON.stringify(value));
  } catch (err) {
    core.setFailed(err.message);
  }

}

run()
