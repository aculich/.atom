"use babel";

// Copyright (c) 2017 Sebastian Wiesner
//
// GNU GENERAL PUBLIC LICENSE
//    Version 3, 29 June 2007
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// My atom configuration <3

// I should try these packages:
//
// * https://atom.io/packages/atom-beautify (auto-format code)
// * open-this for gf to open file under cursor
// * https://atom.io/packages/markdown-writer for markdown fanciness
// * https://atom.io/packages/docblockr for documentation comments

import {usePackage, configSet} from "atom-use-package";

const myFont = "Hasklig";

// Core settings
configSet("welcome", {
  showOnStartup: false
});

configSet("core", {
  telemetryConsent: "no",
  openEmptyEditorOnStart: true,
  themes: ["atom-light-ui", "solarized-light-syntax"]
});

configSet("editor", {
  fontFamily: myFont,
  lineHeight: 1.35,
  fontSize: 14,
  softWrap: true,
  softWrapAtPreferredLineLength: true,
  tabType: "soft"
});

// Run code in atom (why's this not builtin❓)
usePackage("run-in-atom");

// Regain control of my key bindings
usePackage("disable-keybindings", {
  config: {
    allCommunityPackages: true,
    exceptCommunityPackages: []
  }
});

// And vimify things
usePackage("vim-mode-plus", {
  enableKeys: true,
  config: {
    // Clear highlights when pressing Esc in normal mode
    clearHighlightSearchOnResetNormalMode: true,
    clearPersistentSelectionOnResetNormalMode: true,
    // Search incrementally and highlight matches
    incrementalSearch: true,
    highlightSearch: true,
    // Use smart case when searching: If the search is all lowercase, search
    // case-insensitive, otherwise search by matching case
    useSmartcaseForSearch: true,
    useSmartcaseForSearchCurrentWord: true
  }
});
usePackage("vim-mode-plus-keymaps-for-surround", {
  enableKeys: true
});
usePackage("cursor-history");

// UI
usePackage("file-icons");
usePackage("paner");  // Pane management
usePackage("choose-pane");  // Choose pane by label

// Files
usePackage("file-watcher", {
  config: {
    autoReload: true
  }
});

// Editing
usePackage("expand-region");

usePackage("spaces-in-braces", {
  enableKeys: true
});
usePackage("underline-trailing-whitespace");

usePackage("pigments"); // Colorise colours

// Completion
usePackage("autocomplete-plus", {
  config: {
    // Complete less aggressively
    autoActivationDelay: 1000,
    backspaceTriggersAutocomplete: true,
    // Do not complete with enter unless explicitly selected
    confirmCompletion: "tab always, enter when suggestion explicitly selected",
    // Don't insert single candidate automatically
    enableAutoConfirmSingleSuggestion: false,
    // Identify non-latin alphabet characters as letters
    enableExtendedUnicodeSupport: true
  }
});

usePackage("autocomplete-emojis"); // Most important compl. source ever

// Navigation
usePackage("jumpy", {
  enableKeys: true
});

// Jump to links
usePackage("hyperclick");
usePackage("hyperlink-hyperclick");

// Coding
usePackage("linter", {
  config: {
    // Check less aggressively
    lintOnFlyInterval: 1000,
    // Show "line" tab in status bar
    showErrorTabLine: true
  }
});

// Version control
usePackage("git-plus", {
  config: {
    commits: {
      verboseCommits: true
    }
  }
});
usePackage("git-log"); // Show a graph log of Git commits (like SourceTree)
usePackage("git-time-machine"); // Go back to past revisions
usePackage("merge-conflicts"); // Solve merge conflicts in Atom
usePackage("split-diff"); // Diff in a split pane

// Haskell
usePackage("language-haskell");
usePackage("ide-haskell", {
  config: {
    // Auto-hide output if there's nothing to show
    autoHideOutput: true
  }
});
usePackage("haskell-ghc-mod", {
  config: {
    // Use linter package for lint marks
    useLinter: true
  }
});
usePackage("autocomplete-haskell");

// Scala
usePackage("language-scala");
usePackage("language-hocon");

// Javascript & related languages
usePackage("js-hyperclick");
usePackage("linter-eslint");

usePackage("atom-typescript");

// Markdown
usePackage("language-markdown"); // Much better than the built-in one

// Misc languages
usePackage("language-ignore"); // Ignore files

// Utilities
usePackage("atom-oss-license");
usePackage("platformio-ide-terminal", {
  config: {
    // The default blue is really aweful
    ansiColors: {
      normal: {
        blue: "#4c4cff"
      },
      zBright: {
        brightBlue: "#6565d1"
      }
    },
    style: {
      // Open faster
      animationSpeed: 100,
      defaultPanelHeight: "33%",
      fontFamily: myFont,
      // Why's there no solarized-light? 😢
      theme: "solarized-dark"
    },
    toggles: {
      // Automatically close terminal when shell exits
      autoClose: true
    }
  }
});

// Documentation
usePackage("keybinding-cheatsheet");
usePackage("dash");
