const express = require("express");
const { CusedWordsTable } = require("../models");
const { isTagValid, isLangValid } = require("../utils/validate");
const router = express.Router();

router.get("/", async (req, res) => {
  const allCursedWords = await CusedWordsTable.findAll();
  res.json(allCursedWords);
});

router.get("/hard", async (req, res) => {
  const allHardCursedWords = await CusedWordsTable.findAll({
    where: {
      tag: "hard",
    },
  });
  res.json(allHardCursedWords);
});

router.get("/soft", async (req, res) => {
  const allSoftCursedWords = await CusedWordsTable.findAll({
    where: {
      tag: "soft",
    },
  });
  res.json(allSoftCursedWords);
});

router.get("/spanish", async (req, res) => {
  const spanishCursedWord = await CusedWordsTable.findAll({
    where: {
      language: "spanish",
    },
  });
  res.json(spanishCursedWord);
});

router.get("/spanish/hard", async (req, res) => {
  const spanishHardCursedWord = await CusedWordsTable.findAll({
    where: {
      language: "spanish",
      tag: "hard",
    },
  });
  res.json(spanishHardCursedWord);
});

router.get("/spanish/soft", async (req, res) => {
  const spanishSoftCursedWord = await CusedWordsTable.findAll({
    where: {
      language: "spanish",
      tag: "soft",
    },
  });
  res.json(spanishSoftCursedWord);
});

router.get("/korean", async (req, res) => {
  const koreanCursedWord = await CusedWordsTable.findAll({
    where: {
      language: "korean",
    },
  });
  res.json(koreanCursedWord);
});

router.get("/korean/hard", async (req, res) => {
  const koreanHardCursedWord = await CusedWordsTable.findAll({
    where: {
      language: "korean",
      tag: "hard",
    },
  });
  res.json(koreanHardCursedWord);
});

router.get("/korean/soft", async (req, res) => {
  const koreanSoftCursedWord = await CusedWordsTable.findAll({
    where: {
      language: "korean",
      tag: "soft",
    },
  });
  res.json(koreanSoftCursedWord);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const singleCursedWord = await CusedWordsTable.findOne({
    where: {
      id,
    },
  });
  res.json(singleCursedWord);
});

router.post("/", async (req, res) => {
  const { word, language, tag, meaning, example } = req.body;
  const { checkedLang, errorLang } = isLangValid(language);
  const { checkedTag, errorTag } = isTagValid(tag);
  if (errorLang || errorTag)
    return res.json({ error: errorTag ? errorTag : errorLang });
  try {
    const newCurseWord = await CusedWordsTable.create({
      word,
      language: checkedLang,
      tag: checkedTag,
      meaning,
      example,
    });
    newCurseWord.save();
    res.json({
      message: "a new cursed word successfully created",
      newCurseWord,
    });
  } catch (err) {
    throw new Error(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { word, language, tag, meaning, example } = req.body;
  const cursedword = await CusedWordsTable.findOne({
    where: {
      id,
    },
  });
  if (!cursedword)
    return res.status(400).json({ msg: "Cursed Word Not Found" });
  const { checkedLang, errorLang } = isLangValid(language);
  const { checkedTag, errorTag } = isTagValid(tag);
  if (errorLang || errorTag)
    return res.json({ error: errorTag ? errorTag : errorLang });
  try {
    await CusedWordsTable.update(
      {
        word,
        language: checkedLang,
        tag: checkedTag,
        meaning,
        example,
      },
      {
        where: {
          id,
        },
      }
    );
  } catch (err) {
    throw new Error(err);
  }
  res.json({
    message: "Cursed Word has been successfully updated",
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const cursedword = await CusedWordsTable.findOne({
    where: {
      id,
    },
  });
  if (!cursedword)
    return res.status(400).json({ msg: "Cursed Word Not Found" });
  try {
    await CusedWordsTable.destroy({
      where: {
        id,
      },
    });
  } catch (err) {
    throw new Error(err);
  }
  res.json({
    message: "Cursed Word has been successfully deleted",
  });
});

module.exports = router;
