const core = require('@actions/core');

function run() {
  try {
    const inputKeys = core.getInput('keys');
    const value = inputKeys.split(',').map(item => item.trim());
    core.setOutput('item', value);
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
