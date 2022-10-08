/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// biblejs-name-converter/lib/books.js
var require_books = __commonJS({
  "biblejs-name-converter/lib/books.js"(exports, module2) {
    function generateOrdinalNameVariations(number, names) {
      var variations = [];
      var numerals;
      if (number === 1) {
        numerals = ["1", "I", "First"];
      } else if (number === 2) {
        numerals = ["2", "II", "Second"];
      } else if (number === 3) {
        numerals = ["3", "III", "Third"];
      }
      names.forEach(function(name) {
        numerals.forEach(function(numeral) {
          variations.push(numeral + name);
          variations.push(numeral + " " + name);
        });
      });
      return variations;
    }
    module2.exports = [
      {
        names: "Genesis Ge Gen".split(" "),
        verses: [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26]
      },
      {
        names: "Exodus Ex Exo".split(" "),
        verses: [22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38]
      },
      {
        names: "Leviticus Le Lev".split(" "),
        verses: [17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34]
      },
      {
        names: "Numbers Nu Num".split(" "),
        verses: [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32, 22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13]
      },
      {
        names: "Deuteronomy Dt Deut Deu De".split(" "),
        verses: [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12]
      },
      {
        names: "Joshua Js Jos Jos Josh".split(" "),
        verses: [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33]
      },
      {
        names: "Judges Jg Jud Jdg Ju Jdgs Judg".split(" "),
        verses: [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25]
      },
      {
        names: "Ruth Ru Rut".split(" "),
        verses: [22, 23, 18, 22]
      },
      {
        names: generateOrdinalNameVariations(1, "Samuel Sa Sam".split(" ")),
        verses: [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13]
      },
      {
        names: generateOrdinalNameVariations(2, "Samuel Sa Sam".split(" ")),
        verses: [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43, 26, 22, 51, 39, 25]
      },
      {
        names: generateOrdinalNameVariations(1, "Kings Ki King Kin Kngs".split(" ")),
        verses: [53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 53]
      },
      {
        names: generateOrdinalNameVariations(2, "Kings Ki King Kin Kngs".split(" ")),
        verses: [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30]
      },
      {
        names: generateOrdinalNameVariations(1, "Chronicles Ch Chr Chron".split(" ")),
        verses: [54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30]
      },
      {
        names: generateOrdinalNameVariations(2, "Chronicles Ch Chr Chron".split(" ")),
        verses: [17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23]
      },
      {
        names: "Ezra Ez Ezr".split(" "),
        verses: [11, 70, 13, 24, 17, 22, 28, 36, 15, 44]
      },
      {
        names: "Nehemiah Ne Neh Neh Ne".split(" "),
        verses: [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31]
      },
      {
        names: "Esther Es Est Esth Ester".split(" "),
        verses: [22, 23, 15, 17, 14, 14, 10, 17, 32, 3]
      },
      {
        names: "Job Jb Job".split(" "),
        verses: [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 24, 34, 17]
      },
      {
        names: "Psalm Ps Psa Pss Psalms".split(" "),
        verses: [6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13, 31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17, 13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12, 8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 13, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8, 28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 13, 10, 7, 12, 15, 21, 10, 20, 14, 9, 6]
      },
      {
        names: "Proverbs Pr Prov Pro".split(" "),
        verses: [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31]
      },
      {
        names: "Ecclesiastes Ec Ecc".split(" "),
        verses: [18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14]
      },
      {
        names: ["Song of Solomon", "SOS", "Song of Songs", "SongOfSongs"],
        verses: [17, 17, 11, 16, 16, 13, 13, 14]
      },
      {
        names: "Isaiah Isa".split(" "),
        verses: [31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 12, 25, 24]
      },
      {
        names: "Jeremiah Je Jer".split(" "),
        verses: [19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34]
      },
      {
        names: "Lamentations La Lam Lament".split(" "),
        verses: [22, 22, 66, 22, 22]
      },
      {
        names: "Ezekiel Ek Ezek Eze".split(" "),
        verses: [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35]
      },
      {
        names: "Daniel Da Dan Dl Dnl".split(" "),
        verses: [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13]
      },
      {
        names: "Hosea Ho Hos".split(" "),
        verses: [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9]
      },
      {
        names: "Joel Jl Joel Joe".split(" "),
        verses: [20, 32, 21]
      },
      {
        names: "Amos Am Amos Amo".split(" "),
        verses: [15, 16, 15, 13, 27, 14, 17, 14, 15]
      },
      {
        names: "Obadiah Ob Oba Obd Odbh".split(" "),
        verses: [21]
      },
      {
        names: "Jonah Jh Jon Jnh".split(" "),
        verses: [17, 10, 10, 11]
      },
      {
        names: "Micah Mi Mic".split(" "),
        verses: [16, 13, 12, 13, 15, 16, 20]
      },
      {
        names: "Nahum Na Nah Na".split(" "),
        verses: [15, 13, 19]
      },
      {
        names: "Habakkuk Hb Hab Hk Habk".split(" "),
        verses: [17, 20, 19]
      },
      {
        names: "Zephaniah Zp Zep Zeph Ze".split(" "),
        verses: [18, 15, 20]
      },
      {
        names: "Haggai Ha Hag Hagg".split(" "),
        verses: [15, 23]
      },
      {
        names: "Zechariah Zc Zech Zec".split(" "),
        verses: [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21]
      },
      {
        names: "Malachi Ml Mal Mlc".split(" "),
        verses: [14, 17, 18, 6]
      },
      {
        names: "Matthew Mt Matt Mat".split(" "),
        verses: [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20]
      },
      {
        names: "Mark Mk Mrk".split(" "),
        verses: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20]
      },
      {
        names: "Luke Lk Luk Lu".split(" "),
        verses: [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53]
      },
      {
        names: "John Jn Joh Jo".split(" "),
        verses: [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25]
      },
      {
        names: "Acts Ac Act".split(" "),
        verses: [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 41, 38, 40, 30, 35, 27, 27, 32, 44, 31]
      },
      {
        names: "Romans Ro Rom Rmn Rmns".split(" "),
        verses: [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27]
      },
      {
        names: generateOrdinalNameVariations(1, "Corinthians Co Cor".split(" ")),
        verses: [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24]
      },
      {
        names: generateOrdinalNameVariations(2, "Corinthians Co Cor".split(" ")),
        verses: [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14]
      },
      {
        names: "Galatians Ga Gal Gltns".split(" "),
        verses: [24, 21, 29, 31, 26, 18]
      },
      {
        names: "Ephesians Ep Eph Ephn".split(" "),
        verses: [23, 22, 21, 32, 33, 24]
      },
      {
        names: "Philippians Phi Phil Phi".split(" "),
        verses: [30, 30, 21, 23]
      },
      {
        names: "Colossians Co Col Colo Cln Clns".split(" "),
        verses: [29, 23, 25, 18]
      },
      {
        names: generateOrdinalNameVariations(1, "Thessalonians Th Thess Thes".split(" ")),
        verses: [10, 20, 13, 18, 28]
      },
      {
        names: generateOrdinalNameVariations(2, "Thessalonians Th Thess Thes".split(" ")),
        verses: [12, 17, 18]
      },
      {
        names: generateOrdinalNameVariations(1, "Timothy Ti Tim".split(" ")),
        verses: [20, 15, 16, 16, 25, 21]
      },
      {
        names: generateOrdinalNameVariations(2, "Timothy Ti Tim".split(" ")),
        verses: [18, 26, 17, 22]
      },
      {
        names: "Titus Ti Tit Tt Ts".split(" "),
        verses: [16, 15, 15]
      },
      {
        names: "Philemon Pm Phile Philm Pm".split(" "),
        verses: [25]
      },
      {
        names: "Hebrews He Heb Hw".split(" "),
        verses: [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25]
      },
      {
        names: "James Jm Jam Jas Ja".split(" "),
        verses: [27, 26, 18, 17, 20]
      },
      {
        names: generateOrdinalNameVariations(1, "Peter Pe Pet P".split(" ")),
        verses: [25, 25, 22, 19, 14]
      },
      {
        names: generateOrdinalNameVariations(2, "Peter Pe Pet P".split(" ")),
        verses: [21, 22, 18]
      },
      {
        names: generateOrdinalNameVariations(1, "John Joh Jo Jn J".split(" ")),
        verses: [10, 29, 24, 21, 21]
      },
      {
        names: generateOrdinalNameVariations(2, "John Joh Jo Jn J".split(" ")),
        verses: [13]
      },
      {
        names: generateOrdinalNameVariations(3, "John Joh Jo Jn J".split(" ")),
        verses: [14]
      },
      {
        names: "Jude Jude".split(" "),
        verses: [25]
      },
      {
        names: "Revelation Re Rev Rvltn".split(" "),
        verses: [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21]
      }
    ];
  }
});

// biblejs-name-converter/lib/reference.js
var require_reference = __commonJS({
  "biblejs-name-converter/lib/reference.js"(exports, module2) {
    var books = require_books();
    function Reference2(reference) {
      if (!reference) {
        throw new Error('You must supply a Bible reference, either a string (i.e. "Mark 2") or an object (i.e. { book: 1, chapter: 2, verse: 1 })');
      }
      if (typeof reference === "string") {
        reference = reference.replace(/\./g, "");
        this.source = reference;
        var referenceParts = reference.match(/(.+[A-Za-z])\s+(.+)/);
        var bookName = referenceParts[1];
        var chapterAndVerse = referenceParts[2];
        this.book = Reference2.bookIdFromName(bookName);
        var chapterAndVerseParts = chapterAndVerse.split(":");
        this.chapter = Number(chapterAndVerseParts[0]);
        this.verse = chapterAndVerseParts[1] ? Number(chapterAndVerseParts[1]) : null;
      } else {
        if (!reference.book) {
          throw new Error('The object you supplied does not seem to be a Bible reference (there is no "book" property)');
        }
        var hasBook = typeof reference.book === "number";
        var hasChapter = typeof reference.chapter === "number";
        var validVerseIfPresent = reference.verse == null || typeof reference.verse === "number";
        if (hasBook && hasChapter && validVerseIfPresent) {
          this.book = reference.book;
          this.chapter = reference.chapter;
          this.verse = reference.verse;
        }
      }
    }
    Reference2.prototype.isChapter = function isChapter() {
      return this.verse == null;
    };
    Reference2.prototype.startOf = function startOf(unit) {
      if (unit === "chapter") {
        this.verse = 1;
      } else if (unit === "book") {
        this.verse = 1;
        this.chapter = 1;
      } else {
        throw new Error("Unknown unit " + unit + ' supplied to startOf() - supported units are: "book", "chapter"');
      }
      return this;
    };
    Reference2.prototype.clone = function clone() {
      return new Reference2(this);
    };
    Reference2.prototype.toString = function toString() {
      var bookName = books[this.book - 1].names[0];
      var stringified = bookName + " " + this.chapter;
      if (this.verse != null) {
        stringified += ":" + this.verse;
      }
      return stringified;
    };
    Reference2.prototype.toVerseId = function toVerseId() {
      var verseCount = 0;
      var bookIndex = this.book - 1;
      while (bookIndex >= 1) {
        verseCount += Reference2.versesInBookId(bookIndex);
        bookIndex -= 1;
      }
      var chapterIndex = this.chapter - 1;
      while (chapterIndex >= 1) {
        verseCount += Reference2.versesInBookId(bookIndex);
        verseCount += books[this.book - 1].verses[chapterIndex];
      }
      if (this.verse != null) {
        verseCount += this.verse;
      }
      return verseCount;
    };
    Reference2.prototype.toChapterId = function toChapterId() {
      var previousBookChapters = Reference2.chaptersUpToBookId(this.book);
      return previousBookChapters + this.chapter;
    };
    Reference2.prototype.toBookId = function toBookId() {
      return this.book;
    };
    Reference2.prototype.valueOf = function valueOf() {
      return this.toVerseId();
    };
    Reference2.bookIdFromName = function bookIdFromName(name) {
      name = name.toLowerCase();
      var book = books.find(function(book2) {
        var bookNames = book2.names.map(function(n) {
          return n.toLowerCase();
        });
        return bookNames.indexOf(name) > -1;
      });
      if (book) {
        return books.indexOf(book) + 1;
      }
      throw new Error('No book matched "' + name + '"');
    };
    Reference2.bookNameFromId = function bookNameFromId(id) {
      var book = books[id - 1];
      if (!book) {
        throw new Error("Book id out of range (no such book)");
      }
      return book.names[0];
    };
    Reference2.fromChapterId = function fromChapterId(chapterId) {
      var chaptersRemaining = chapterId;
      var bookIndex = 0;
      while (chaptersRemaining > 0) {
        var chaptersInThisBook = books[bookIndex].verses.length;
        if (chaptersRemaining - chaptersInThisBook <= 0) {
          return new Reference2({ book: bookIndex + 1, chapter: chaptersRemaining });
        }
        chaptersRemaining -= chaptersInThisBook;
        bookIndex += 1;
      }
      throw new Error("There was a problem creating the a reference from chapter id " + chapterId);
    };
    Reference2.fromVerseId = function fromVerseId(verseId) {
      var versesRemaining = verseId;
      var bookIndex = 0;
      while (versesRemaining > 0) {
        var versesInThisBook = Reference2.versesInBookId(bookIndex + 1);
        if (versesRemaining - versesInThisBook < 0) {
          var book = books[bookIndex];
          var chapterIndex = 0;
          while (versesRemaining > 0) {
            var versesInThisChapter = book.verses[chapterIndex];
            if (versesRemaining - versesInThisChapter < 0) {
              return new Reference2({ book: bookIndex + 1, chapter: chapterIndex + 1, verse: versesRemaining });
            }
            versesRemaining -= versesInThisChapter;
            chapterIndex += 1;
          }
        }
        versesRemaining -= versesInThisBook;
        bookIndex += 1;
      }
    };
    Reference2.versesInBookId = function versesInBookId(bookId) {
      return books[bookId - 1].verses.reduce(function sum(a, b) {
        return a + b;
      });
    };
    Reference2.versesInChapterId = function versesInChapterId(chapterId) {
      var reference = Reference2.fromChapterId(chapterId);
      return books[reference.book - 1].verses[reference.chapter - 1];
    };
    Reference2.chaptersInBookId = function chaptersInBookId(bookId) {
      return books[bookId - 1].verses.length;
    };
    Reference2.versesUpToBookId = function versesUpToBookId(bookId) {
      var count = 0;
      var booksLeft = bookId - 1;
      while (booksLeft > 0) {
        count += Reference2.versesInBookId(booksLeft);
        booksLeft -= 1;
      }
      return count;
    };
    Reference2.versesUpToChapterId = function versesUpToChapterId(chapterId) {
      var count = 0;
      var chaptersLeft = chapterId - 1;
      while (chaptersLeft > 0) {
        count += Reference2.versesInChapterId(chaptersLeft);
        chaptersLeft -= 1;
      }
      return count;
    };
    Reference2.chaptersUpToBookId = function chaptersUpToBookId(bookId) {
      var count = 0;
      var booksLeft = bookId - 1;
      while (booksLeft > 0) {
        count += Reference2.chaptersInBookId(booksLeft);
        booksLeft -= 1;
      }
      return count;
    };
    module2.exports = Reference2;
  }
});

// biblejs-name-converter/lib/range.js
var require_range = __commonJS({
  "biblejs-name-converter/lib/range.js"(exports, module2) {
    var Reference2 = require_reference();
    function Range(start, end) {
      if (!(start instanceof Reference2)) {
        start = new Reference2(start);
      }
      if (!(end instanceof Reference2)) {
        end = new Reference2(end);
      }
      this.start = start;
      this.end = end;
      if (start > end) {
        this.start = end;
        this.end = start;
      }
    }
    Range.prototype.distance = function distance() {
      return {
        verses: this.end.toVerseId() - this.start.toVerseId(),
        chapters: this.end.toChapterId() - this.start.toChapterId(),
        books: this.end.toBookId() - this.start.toBookId()
      };
    };
    Range.isRange = function isRange(value) {
      return value instanceof Range || value.indexOf("-") > -1;
    };
    module2.exports = Range;
  }
});

// biblejs-name-converter/index.js
var require_biblejs_name_converter = __commonJS({
  "biblejs-name-converter/index.js"(exports, module2) {
    module2.exports = {
      Reference: require_reference(),
      Range: require_range(),
      Books: require_books()
    };
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => BibleReferencePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// src/data/BibleApiSourceCollection.ts
var BibleAPISourceCollection = {
  bibleApi: {
    name: "Bible API",
    apiUrl: "https://bible-api.com"
  },
  bollsLife: {
    name: "Bolls Life",
    apiUrl: "https://bible-api-bff.bai.uno/bolls-life"
  }
};

// src/data/BibleVersionCollection.ts
var BibleVersionCollection = [
  {
    key: "web",
    versionName: "World English Bible",
    language: "English",
    apiUrl: "https://bible-api.com",
    apiSource: BibleAPISourceCollection.bibleApi
  },
  {
    key: "clementine",
    versionName: "Clementine Latin Vulgate",
    language: "Latin",
    apiUrl: "https://bible-api.com",
    apiSource: BibleAPISourceCollection.bibleApi
  },
  {
    key: "kjv",
    versionName: "King James Version",
    language: "English",
    apiUrl: "https://bible-api.com",
    apiSource: BibleAPISourceCollection.bibleApi
  },
  {
    key: "bbe",
    versionName: "Bible in Basic English",
    language: "English",
    apiUrl: "https://bible-api.com",
    apiSource: BibleAPISourceCollection.bibleApi
  },
  {
    key: "oeb-us",
    versionName: "Open English Bible, US Edition",
    language: "English",
    apiUrl: "https://bible-api.com",
    apiSource: BibleAPISourceCollection.bibleApi
  },
  {
    key: "almeida",
    versionName: "Jo\xE3o Ferreira de Almeida",
    language: "Portuguese",
    apiUrl: "https://bible-api.com",
    apiSource: BibleAPISourceCollection.bibleApi
  },
  {
    key: "rccv",
    versionName: "Romanian Corrected Cornilescu Version",
    language: "Romanian",
    apiUrl: "https://bible-api.com",
    apiSource: BibleAPISourceCollection.bibleApi
  },
  {
    key: "cherokee",
    versionName: "Cherokee New Testament",
    language: "Cherokee",
    apiUrl: "https://bible-api.com",
    apiSource: BibleAPISourceCollection.bibleApi
  },
  {
    key: "oeb-cw",
    versionName: "Open English Bible, Commonwealth Edition",
    language: "English (UK)",
    apiUrl: "https://bible-api.com",
    apiSource: BibleAPISourceCollection.bibleApi
  },
  {
    key: "webbe",
    versionName: "World English Bible, British Edition",
    language: "English (UK)",
    apiUrl: "https://bible-api.com",
    apiSource: BibleAPISourceCollection.bibleApi
  },
  {
    key: "nkjv",
    versionName: "New King James Version",
    language: "English",
    apiSource: BibleAPISourceCollection.bollsLife,
    infoUrl: "https://wikipedia.org/wiki/New_King_James_Version"
  },
  {
    key: "niv",
    versionName: "New International Version, 1984",
    language: "English",
    apiSource: BibleAPISourceCollection.bollsLife
  },
  {
    key: "nrsvce",
    versionName: "New Revised Standard Version Catholic Edition (NRSVCE)",
    language: "English",
    apiSource: BibleAPISourceCollection.bollsLife
  },
  {
    key: "esv",
    versionName: "English Standard Version",
    language: "English",
    apiSource: BibleAPISourceCollection.bollsLife
  },
  {
    key: "cuv",
    versionName: "Chinese Union Version (Traditional)",
    language: "Chinese",
    apiSource: BibleAPISourceCollection.bollsLife
  }
];

// src/data/BibleVerseReferenceLinkPosition.ts
var BibleVerseReferenceLinkPositionCollection = [
  {
    name: "Header" /* Header */,
    description: "Header (Bible Verse Header)"
  },
  {
    name: "Bottom" /* Bottom */,
    description: "Bottom (Bottom of Bible Verse Content)"
  },
  {
    name: "Both" /* AllAbove */,
    description: "Both (Both of Above)"
  }
];

// src/data/constants.ts
var APP_NAMING = {
  appName: "Bible Reference",
  appAuthor: "tim-hub",
  appUrl: "",
  defaultStatus: ""
};
var DEFAULT_SETTINGS = {
  bibleVersion: BibleVersionCollection[0].key,
  referenceLinkPosition: "Header" /* Header */
};

// src/ui/BibleReferenceSettingTab.ts
var import_obsidian = require("obsidian");
var BibleReferenceSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.getAllBibleVersionsWithLanguageNameAlphabetically = () => {
      return this.getAllBibleVersionsWithLanguageName().sort((a, b) => {
        const languageCompare = a.language.localeCompare(b.language);
        if (languageCompare === 0) {
          return a.versionName.localeCompare(b.versionName);
        } else {
          return languageCompare;
        }
      });
    };
    this.getAllBibleVersionsWithLanguageName = () => {
      return BibleVersionCollection;
    };
    this.SetUpVersionSettingsAndVersionOptions = (containerEl) => {
      new import_obsidian.Setting(containerEl).setName("Default Bible Version").setDesc("Choose the Bible Version You Prefer").addDropdown((dropdown) => {
        const allVersionOptions = this.getAllBibleVersionsWithLanguageNameAlphabetically();
        allVersionOptions.forEach((version) => {
          dropdown.addOption(version.key, `${version.language} - ${version.versionName} @${version.apiSource.name}`);
        });
        dropdown.setValue(this.plugin.settings.bibleVersion).onChange(async (value) => {
          this.plugin.settings.bibleVersion = value;
          console.debug("Default Bible Version: " + value);
          await this.plugin.saveSettings();
          new import_obsidian.Notice("Bible Reference Settings Updated ");
        });
      });
    };
    this.SetUpReferenceLinkPositionOptions = (containerEl) => {
      new import_obsidian.Setting(containerEl).setName("Verse Reference Link Position").setDesc("Where to put the bible verse reference link of the bible").addDropdown((dropdown) => {
        var _a;
        BibleVerseReferenceLinkPositionCollection.forEach(({ name, description }) => {
          dropdown.addOption(name, description);
        });
        dropdown.setValue((_a = this.plugin.settings.referenceLinkPosition) != null ? _a : "Bottom" /* Bottom */).onChange(async (value) => {
          this.plugin.settings.referenceLinkPosition = value;
          console.debug("Bible Verse Reference Link Position: " + value);
          await this.plugin.saveSettings();
          new import_obsidian.Notice("Bible Reference Settings Updated ");
        });
      });
    };
    this.plugin = plugin;
  }
  display() {
    let { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Settings for " + APP_NAMING.appName });
    this.SetUpVersionSettingsAndVersionOptions(containerEl);
    this.SetUpReferenceLinkPositionOptions(containerEl);
    containerEl.createEl("br");
    containerEl.createEl("p", { text: "The back-end is powered by Bible-Api.com and Bolls.life/API, at current stage the performance from Bolls.life/API might be a bit slow." });
    containerEl.createEl("br");
    containerEl.createEl("p", { text: "For Non-English Bible Versions, at current stage, it is required to use English book name for input." });
  }
};

// src/VerseEditorSuggestor.ts
var import_obsidian2 = require("obsidian");

// src/VerseTypoCheck.ts
var shortReg = /\-{2}([123])*[A-z]{3,}\d{1,3}\:\d{1,3}(\-\d{1,3})*/;
var VerseTypoCheck = (verse) => {
  var _a, _b;
  return (_b = (_a = verse.match(shortReg)) == null ? void 0 : _a.first()) != null ? _b : "";
};

// src/provider/BibleProvider.ts
var BibleProvider = class {
  get BibleVersionKey() {
    return this._key;
  }
  get QueryURL() {
    return this._queryUrl;
  }
  get BibleReferenceHead() {
    return this._bibleReferenceHead;
  }
  async query(bookName, chapter, verse, versionName) {
    if (!this._key && versionName) {
      throw new Error("version (language) not set yet");
    }
    const url = this.buildRequestURL(bookName, chapter, verse, versionName || this._key);
    console.debug(url, "url to query");
    try {
      const response = await fetch(url);
      const data = await response.json();
      return this.formatBibleVerses(data, bookName, chapter, verse, versionName || this._key);
    } catch (e) {
      console.error("error while querying", e);
      return await Promise.reject(e);
    }
  }
};

// src/provider/BibleAPIDotComProvider.ts
var BibleAPIDotComProvider = class extends BibleProvider {
  constructor(bibleVersion) {
    super();
    const { key } = bibleVersion;
    this._key = key;
    this._apiUrl = bibleVersion.apiSource.apiUrl;
  }
  buildRequestURL(bookName, chapter, verses, versionName) {
    let queryString = `${bookName}+${chapter}:`;
    if ((verses == null ? void 0 : verses.length) >= 3) {
      queryString += verses.join("&");
    } else if ((verses == null ? void 0 : verses.length) === 2 && !!verses[1]) {
      queryString += `${verses[0]}-${verses[1]}`;
    } else {
      queryString += `${verses[0]}`;
    }
    this._queryUrl = `${this._apiUrl}/${queryString}?translation=${versionName ? versionName : (this == null ? void 0 : this.BibleVersionKey) ? this.BibleVersionKey : ""}`;
    return this._queryUrl;
  }
  formatBibleVerses(data) {
    this._bibleReferenceHead = data.reference;
    return data.verses;
  }
};

// src/provider/BollyLifeProvider.ts
var import_biblejs_name_converter = __toESM(require_biblejs_name_converter());
var BollyLifeProvider = class extends BibleProvider {
  constructor(bibleVersion) {
    super();
    const { key } = bibleVersion;
    this._key = key;
    this._apiUrl = bibleVersion.apiSource.apiUrl;
    this._chapterApiUrl = this._apiUrl;
  }
  buildRequestURL(bookName, chapter, verses, versionName) {
    const baseUrl = this._chapterApiUrl;
    const book = import_biblejs_name_converter.Reference.bookIdFromName(bookName);
    this._queryUrl = `${baseUrl}/${versionName == null ? void 0 : versionName.toUpperCase()}/${book}/${chapter}/`;
    return this._queryUrl;
  }
  formatBibleVerses(data, bookName, chapter, verses, versionName) {
    this._bibleReferenceHead = `${bookName} ${chapter}:${verses[0]}${verses[1] ? `-${verses[1]}` : ""}`;
    return data.filter((verse) => verse.verse >= verses[0] && verse.verse <= verses[verses.length - 1]).map((verse) => ({
      text: verse.text,
      chapter: verse.chapter,
      book_id: verse.book,
      book_name: bookName,
      verse: verse.verse
    }));
  }
};

// src/provider/BibleAPIFactory.ts
var BibleAPIFactory = class {
  constructor() {
    if (BibleAPIFactory._instance) {
      throw new Error("Error: Instantiation failed: Use BibleAPIFactory.Instance instead of new.");
    }
    BibleAPIFactory._instance = this;
  }
  static get Instance() {
    if (BibleAPIFactory._instance === null || BibleAPIFactory._instance === void 0) {
      BibleAPIFactory._instance = new BibleAPIFactory();
    }
    return BibleAPIFactory._instance;
  }
  BuildBibleVersionAPIAdapterFromIBibleVersion(bibleVersion) {
    switch (bibleVersion.apiSource) {
      case BibleAPISourceCollection.bibleApi: {
        return new BibleAPIDotComProvider(bibleVersion);
      }
      case BibleAPISourceCollection.bollsLife: {
        return new BollyLifeProvider(bibleVersion);
      }
      default: {
        return new BibleAPIDotComProvider(bibleVersion);
      }
    }
  }
};

// src/VerseSuggesting.ts
var VerseSuggesting = class {
  constructor(settings, bookName, chapterNumber, verseNumber, verseNumberEnd) {
    this.settings = settings;
    this.bookName = bookName;
    this.chapterNumber = chapterNumber;
    this.verseNumber = verseNumber;
    this.verseNumberEnd = verseNumberEnd;
    this.bookName = bookName;
    this.chapterNumber = chapterNumber;
    this.verseNumber = verseNumber;
    this.verseNumberEnd = verseNumberEnd;
    this.bibleVersion = settings.bibleVersion;
  }
  get ReplacementContent() {
    let head = `> [!Bible] `;
    let bottom = "";
    if (this.settings.referenceLinkPosition === "Header" /* Header */ || this.settings.referenceLinkPosition === "Both" /* AllAbove */) {
      head += this.getVerseReference();
    }
    if (this.settings.referenceLinkPosition === "Bottom" /* Bottom */ || this.settings.referenceLinkPosition === "Both" /* AllAbove */) {
      bottom += `> 
 ${this.getVerseReference()}`;
    }
    return [
      head,
      `> ${this.text.trim()}`,
      bottom
    ].join("\n");
  }
  async getVerses() {
    var _a;
    console.debug(this.bibleVersion);
    if (this.bibleVersion === DEFAULT_SETTINGS.bibleVersion) {
      console.debug("match to default language plus version");
    }
    const bibleVersion = (_a = BibleVersionCollection.find((bv) => bv.key === this.bibleVersion)) != null ? _a : BibleVersionCollection[0];
    if (!this.bibleProvider || this.bibleProvider.BibleVersionKey !== (bibleVersion == null ? void 0 : bibleVersion.key)) {
      this.bibleProvider = BibleAPIFactory.Instance.BuildBibleVersionAPIAdapterFromIBibleVersion(bibleVersion);
    }
    return this.bibleProvider.query(this.bookName, this.chapterNumber, (this == null ? void 0 : this.verseNumberEnd) ? [this.verseNumber, this.verseNumberEnd] : [this.verseNumber]);
  }
  async fetchAndSetVersesText() {
    const verses = await this.getVerses();
    let text = "";
    verses.forEach((verse) => {
      text += verse.text.replace("\n", "\n>");
    });
    this.text = text;
  }
  getVerseReference() {
    return ` [${this.bibleProvider.BibleReferenceHead} - ${this.bibleVersion.toUpperCase()}](${this.bibleProvider.QueryURL})`;
  }
};

// src/VerseEditorSuggestor.ts
var VerseEditorSuggestor = class extends import_obsidian2.EditorSuggest {
  constructor(plugin, settings) {
    super(plugin.app);
    this.plugin = plugin;
    this.settings = settings;
  }
  onTrigger(cursor, editor, _) {
    const currentContent = editor.getLine(cursor.line).substring(0, cursor.ch);
    const match = VerseTypoCheck(currentContent);
    if (match) {
      console.debug("trigger on", currentContent);
      return {
        end: cursor,
        start: {
          line: cursor.line,
          ch: currentContent.lastIndexOf(match)
        },
        query: match
      };
    }
    return null;
  }
  async getSuggestions(context) {
    var _a;
    console.debug("get suggestion for query ", context.query.toLowerCase());
    const bookName = (_a = context.query.match(/[123]*[A-z]{3,}/)) == null ? void 0 : _a.first();
    if (!bookName) {
      console.error(`could not find through query`, context.query);
      return [];
    }
    const numbersPartsOfQueryString = context.query.substring(2 + bookName.length);
    const numbers = numbersPartsOfQueryString.split(/[-:]+/);
    const chapterNumber = parseInt(numbers[0]);
    const verseNumber = parseInt(numbers[1]);
    const verseEndNumber = numbers.length === 3 ? parseInt(numbers[2]) : void 0;
    const suggestingVerse = new VerseSuggesting(this.settings, bookName, chapterNumber, verseNumber, verseEndNumber);
    console.debug(bookName, chapterNumber, verseNumber, verseEndNumber, suggestingVerse, this.settings);
    await suggestingVerse.fetchAndSetVersesText();
    return [suggestingVerse];
  }
  renderSuggestion(suggestion, el) {
    const outer = el.createDiv({ cls: "obr-suggester-container" });
    outer.createDiv({ cls: "obr-shortcode" }).setText(suggestion.text);
  }
  selectSuggestion(suggestion) {
    if (this.context) {
      this.context.editor.replaceRange(suggestion.ReplacementContent, this.context.start, this.context.end);
    }
  }
};

// src/main.ts
var BibleReferencePlugin = class extends import_obsidian3.Plugin {
  async onload() {
    console.log("loading plugin -", APP_NAMING.appName);
    await this.loadSettings();
    this.addSettingTab(new BibleReferenceSettingTab(this.app, this));
    this.registerEditorSuggest(new VerseEditorSuggestor(this, this.settings));
  }
  onunload() {
    console.log("unloading plugin", APP_NAMING.appName);
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    console.debug(this.settings);
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
