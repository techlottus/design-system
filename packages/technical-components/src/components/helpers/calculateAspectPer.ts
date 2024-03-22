export const calculateAspectRatioPercentage = (
  ratio: string,
  fractionRegex: RegExp,
  defaultRatioPercentage: string
) => {
  const containsValidFraction = fractionRegex.test(ratio);

  if (containsValidFraction) {
    const fraction = ratio.match(fractionRegex)
      ? ratio.match(fractionRegex)?.[0]
      : false;
    const numerator = Number(fraction ? fraction.split("/")[0] : 1);
    const denominator = Number(fraction ? fraction.split("/")[1] : 0);

    const roundedNumerator = Math.floor(numerator);
    const roundedDenominator = Math.floor(denominator);

    return `${(roundedDenominator / roundedNumerator) * 100}%`;
  } else {
    return defaultRatioPercentage;
  }
};
