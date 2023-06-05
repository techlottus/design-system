interface Helpers {
  addUtilities(...args: any[]): any;
  addComponents(...args: any[]): any;
  addBase(...args: any[]): any;
  addVariant(name: string, callback: (...args: any[]) => void): any;
  e(...args: any[]): any;
  prefix(...args: any[]): any;
  theme(...args: any[]): any;
  variants(...args: any[]): any;
  config(...args: any[]): any;
  postcss: any;
}

declare module 'tailwindcss'
declare module 'tailwindcss/plugin' {
  function plugin(callback: (helpers: Helpers) => void): void
  export default plugin
}
