import translations from "../helpers/translations";
const T = (key) => {
  if (key) {
    try {
      let value = translations.get(key)[localStorage.getItem("index")];
      return value;
    } catch (err) {
      return key;
    }
  }
  return key;
};
export default T;
