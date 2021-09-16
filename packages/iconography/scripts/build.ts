import * as babel from "@babel/core";
import { join, basename } from "path";
import { promisify } from "util";
import { readFile, mkdir, writeFile } from "fs/promises";
import glob from "glob-promise";
import camelcase from "camelcase";
import svgr from "@svgr/core";
import rimraf from "rimraf";

type Icon = {
  svg: string;
  componentName: string;
}

type BuildFormat = 'esm' | 'cjs';

async function getIcons() {
  const files = await glob("./optimized/**/*.svg");
  return Promise.all(
    files.map(async (file) => ({
      svg: await readFile(join(process.cwd(), file), 'utf-8'),
      componentName: `${camelcase(basename(file).replace(/\.svg$/, ''), {
        pascalCase: true,
      })}Icon`
    }) as Icon)
  )
}

async function transform(svg: string, componentName: string, format: BuildFormat) {
  const component = await svgr(svg, {}, { componentName });
  const { code } = await babel.transformAsync(component, {
    plugins: [[require('@babel/plugin-transform-react-jsx'), { useBuiltIns: true }]],
  });

  if (format === 'esm') {
    return code
  }

  return code
    .replace('import * as React from "react"', 'const React = require("react")')
    .replace('export default', 'module.exports =')
}

function exportAll(icons: Icon[], format: BuildFormat, extension: string) {
  return icons
    .map(({ componentName }) => {
      if (format === 'esm') {
        return `export { default as ${componentName} } from './${componentName}${extension}'`
      }
      return `module.exports.${componentName} = require("./${componentName}${extension}")`
    })
    .join('\n')
}

async function buildIcons(format: BuildFormat) {
  let outDir = `./icons`
  if (format === 'esm') {
    outDir += '/esm'
  }

  await mkdir(outDir, { recursive: true })
  const icons = await getIcons();

  await Promise.all(
    icons.flatMap(async ({ componentName, svg }) => {
      let content = await transform(svg, componentName, format)
      let types = `import * as React from 'react';\ndeclare function ${componentName}(props: React.ComponentProps<'svg'>): JSX.Element;\nexport default ${componentName};\n`;

      return [
        writeFile(`${outDir}/${componentName}.js`, content, 'utf8'),
        ...(types ? [writeFile(`${outDir}/${componentName}.d.ts`, types, 'utf8')] : []),
      ];
    }),
  );

  await writeFile(`${outDir}/index.js`, exportAll(icons, format, '.js'), 'utf8')
  await writeFile(`${outDir}/index.d.ts`, exportAll(icons, 'esm', ''), 'utf8')
}

async function main() {
  console.log('Building package...');
  Promise.all([promisify(rimraf)(`./icons/*`)])
    .then(() =>
      Promise.all([
        buildIcons('esm'),
        buildIcons('cjs'),
      ])
    ).then(() => console.log(`Finished building package.`))
}

main();