const fs = require('fs')
const path = require('path')

const getPackageDir = (filepath) => {
  let currDir = path.dirname(require.resolve(filepath))
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) return currDir

    const { dir, root } = path.parse(currDir)
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      )
    }

    currDir = dir
  }
}

module.exports = {
  resolve: {
    alias: {
      '@emotion/core': getPackageDir('@emotion/react'),
      '@emotion/styled': getPackageDir('@emotion/styled'),
      'emotion-theming': getPackageDir('@emotion/react'),
    },
  },
}
