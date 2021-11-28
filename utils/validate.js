const isLangValid = (value) => {
  let checkedLang;
  let errorLang;
  if (typeof value !== "string")
    return "the entry should be only be alphabetical";
  try {
    if (value === "korean") {
      checkedLang = value.toLocaleLowerCase();
    } else if (value === "spanish") {
      checkedLang = value.toLocaleLowerCase();
    } else {
      errorLang = "language not allowed";
    }
    return {
      checkedLang,
      errorLang,
    };
  } catch (err) {
    throw new Error(err);
  }
};
const isTagValid = (value) => {
  let checkedTag;
  let errorTag;
  if (typeof value !== "string")
    return "the entry should be only be alphabetical";
  try {
    if (value === "soft") {
      checkedTag = value.toLocaleLowerCase();
    } else if (value === "hard") {
      checkedTag = value.toLocaleLowerCase();
    } else {
      errorTag = "language not allowed";
    }
    return {
      checkedTag,
      errorTag,
    };
  } catch (err) {
    throw new Error(err);
  }
};
module.exports = {
  isLangValid,
  isTagValid,
};
