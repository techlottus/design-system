export const getTextCount = (text: any, max: any) => {
  let result = "";
  if (text != undefined) {
    const words = text.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      count += words[i].length + 1;
      if (count < max) {
        result += words[i] + " ";
      } else {
        result += " ...";
        break;
      }
    }
    return result;
  }
};
