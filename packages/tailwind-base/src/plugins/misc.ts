import plugin from "tailwindcss/plugin";

export default plugin(({ theme, addBase }) => {
  addBase({
    '.link': {
      color: theme('colors.link'),
      fontWeight: theme('fontWeight.bold'),
      textDecoration: 'underline',
      '&:hover': {
        color: theme('colors.link'),
        opacity: theme('opacity.90'),
      },
    },
  });
});
