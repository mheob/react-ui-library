module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write "**/*.{js,jsx,ts,tsx}"', 'yarn lint:js'],
  '*.json': ['prettier --write "**/*.json"'],
  '*.md': ['prettier --write "**/*.md"'],
  '*.{yaml,yml}': ['prettier --write "**/*.{yaml,yml}"'],
}
