import fs from 'fs-extra';

import runTasks from './run.js';

const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

const helpText = `gext v${pkg.version}

  Usage: gext [options]

  -h --help              Print this help
  -v --version           Print gext version number
  -i --include <ext>    Only include specific extensions
  -e --exclude <ext>    Exclude specific extensions

For more details, please see https://github.com/yyz945947732/group-by-ext`;

const version = () => console.log(`v${pkg.version}`);

const help = () => console.log(helpText);

async function cli(options) {
  if (options.version) {
    version();
  } else if (options.help) {
    help();
  } else {
    return runTasks(options);
  }
  return Promise.resolve();
}

export default cli;
