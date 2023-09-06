import translations from "../helpers/translation";
const Translate = (key) => {
  if (key) {
    try {
      let value = translations.get(key)[localStorage.getItem("index")];
      return value;
    } catch (err) {
      return key;
    }
  }
  return null;
};
export default Translate;
