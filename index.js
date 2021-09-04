const core = require('@actions/core');

function run() {
  try {
    const inputArray = core.getInput('array');
    core.setOutput('item', inputArray);
    // const inputArray = JSON.parse(core.getInput('array'));
    // const json = core.getInput('json');
    //
    // let value = JSON.parse(json);
    // let item1 = '';
    //
    // for (const item of inputArray) {
    //   item1 = item;
    //   if (value[item]) {
    //     value = value[item]
    //   }
    // }
    //
    // core.setOutput('value', JSON.stringify(value));
    // core.setOutput('array', JSON.stringify(inputArray));
    // core.setOutput('item', typeof inputArray);
  } catch (err) {
    core.setFailed(err.message);
  }

}

run()
