import tailwindConfig from '../tailwind.config.js';

const Palette = () => {
  const { colors } = tailwindConfig.presets[0].theme;

  const PaletteItems = ({ colors }) => {
    const elems = [];
    for (const key in colors) {
      elems.push(
        <div className="flex flex-col space-y-1">
          <div style={{ 'backgroundColor': colors[key] }} className="w-14 h-20 rounded" />
          <span className="text-sm">{key}</span>
        </div>
      );
    }
    return <div className="flex space-x-3">
      {elems}
    </div>;
  }

  return <div className="grid">
    <div className="flex flex-col space-y-2">
      <h4 className="font-bold">Surface</h4>
      <PaletteItems colors={colors.surface} />
    </div>
    <div className="flex flex-col space-y-2">
      <h4 className="font-bold">Primary</h4>
      <PaletteItems colors={colors.primary} />
    </div>
    <div className="flex flex-col space-y-2">
      <h4 className="font-bold">Secondary</h4>
      <PaletteItems colors={colors.secondary} />
    </div>
    <div className="flex flex-col space-y-2">
      <h4 className="font-bold">Success</h4>
      <PaletteItems colors={colors.success} />
    </div>
    <div className="flex flex-col space-y-2">
      <h4 className="font-bold">Info</h4>
      <PaletteItems colors={colors.info} />
    </div>
    <div className="flex flex-col space-y-2">
      <h4 className="font-bold">Warning</h4>
      <PaletteItems colors={colors.warning} />
    </div>
    <div className="flex flex-col space-y-2">
      <h4 className="font-bold">Error</h4>
      <PaletteItems colors={colors.error} />
    </div>
    <div className="flex flex-col space-y-2">
      <h4 className="font-bold">Misc</h4>
      <PaletteItems colors={{
        white: colors.white,
        black: colors.black,
        link: colors.link,
      }} />
    </div>
  </div>
};

export default Palette;
