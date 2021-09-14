import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import server from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

// 扩展名
const extensions = ['.ts'];

// 不需要声明文件
const noDeclarationFiles = {
  compilerOptions: false
};

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`)
  return id => pattern.test(id)
};

export default {
  input: './src/index.ts',
  output: {
    format: 'umd',
    file: 'dist/index.js',
    name: 'storageUtil',
    sourcemap: true
  },
  external: makeExternalPredicate([
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]),
  plugins: [
    nodeResolve({ extensions }),
    typescript({ tsconfigOverride: noDeclarationFiles }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'runtime'
    }),
    livereload(),
    server({
      open: true,
      port: 3003,
      contentBase: ''
    })
  ]
}