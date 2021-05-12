module.exports = {
  '*.md': ['prettier --write --parser markdown'],
  '*.{yaml,yml}': ['prettier --write --parser yaml'],
  '*.json': ['yarn prettier --write --parser json'],
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'yarn lint:js'],
}
