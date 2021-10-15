import plugin from "tailwindcss/plugin";

export default plugin(({ addBase }) => {
  addBase({
    '.drawer-open': {
      overflow: 'hidden',
      paddingRight: '15px',
    },
  });
});
