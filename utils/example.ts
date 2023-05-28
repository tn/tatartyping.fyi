import 'server-only'

export async function getExamples() {
  return import('../data/examples.json').then((module) => module.default)
}
