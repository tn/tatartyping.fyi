import 'server-only'

export async function getAlphabet() {
  return import('../data/alphabet.json').then((module) => module.default)
}
