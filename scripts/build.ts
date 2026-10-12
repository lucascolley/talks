import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import { execa } from 'execa'
import { listPresentationFolders } from './presentations'

// Builds each Slidev deck into <out>/<slug>/, served at <base><slug>/.
// In CI, <out> is Quarto's _site, so the decks are published alongside the Quarto talks.
const { values } = parseArgs({
  options: {
    base: { type: 'string', default: '/' },
    out: { type: 'string', default: 'dist' },
  },
})
const base = values.base!
if (!base.startsWith('/') || !base.endsWith('/') || /[?#\\]/.test(base))
  throw new Error('base must be an absolute URL path with a trailing slash')

const root = fileURLToPath(new URL('..', import.meta.url))
const output = path.resolve(root, values.out!)
const folders = await listPresentationFolders()
if (folders.length === 0)
  throw new Error('no presentations found')

for (const slug of folders) {
  const directory = path.join(root, slug)
  const destination = path.join(output, slug)
  // Vite won't empty an outDir outside the deck's folder, so clear stale assets here
  await fs.rm(destination, { recursive: true, force: true })

  console.log(`\nBuilding ${slug}`)
  await execa('slidev', [
    'build', 'slides.md',
    '--base', `${base}${encodeURIComponent(slug)}/`,
    '--out', destination,
    '--router-mode', 'hash',
  ], { cwd: directory, stdio: 'inherit' })
}

console.log(`\nBuilt ${folders.length} presentations in ${output}`)
