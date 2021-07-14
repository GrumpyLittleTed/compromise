import { terser } from 'rollup-plugin-terser'
import sizeCheck from 'rollup-plugin-filesize-check'
// const banner = '/* compromise ' + version + ' MIT */'

export default [
  // === Main ==
  {
    input: 'src/index.js',
    output: [{ file: 'builds/compromise.cjs', format: 'umd', name: 'nlp' }],
    plugins: [terser(), sizeCheck({ expect: 160, warn: 15 })],
  },
  {
    input: 'src/index.js',
    output: [{ file: 'builds/compromise.mjs', format: 'esm' }],
    plugins: [terser(), sizeCheck({ expect: 160, warn: 15 })],
  },

  // === One ==
  {
    input: 'src/one/index.js',
    output: [{ file: 'builds/one/compromise-one.cjs', format: 'umd', name: 'nlp' }],
    plugins: [terser(), sizeCheck({ expect: 40, warn: 15 })],
  },
  {
    input: 'src/one/index.js',
    output: [{ file: 'builds/one/compromise-one.mjs', format: 'esm' }],
    plugins: [terser(), sizeCheck({ expect: 40, warn: 15 })],
  },

  // === Two ==
  {
    input: 'src/two/index.js',
    output: [{ file: 'builds/two/compromise-two.cjs', format: 'umd', name: 'nlp' }],
    plugins: [terser(), sizeCheck({ expect: 160, warn: 15 })],
  },
  {
    input: 'src/two/index.js',
    output: [{ file: 'builds/two/compromise-two.mjs', format: 'esm' }],
    plugins: [terser(), sizeCheck({ expect: 160, warn: 15 })],
  },

  // === Three ==
  {
    input: 'src/three/index.js',
    output: [{ file: 'builds/three/compromise-three.cjs', format: 'umd', name: 'nlp' }],
    plugins: [terser(), sizeCheck({ expect: 160, warn: 15 })],
  },
  {
    input: 'src/three/index.js',
    output: [{ file: 'builds/three/compromise-three.mjs', format: 'esm' }],
    plugins: [terser(), sizeCheck({ expect: 160, warn: 15 })],
  },
]
