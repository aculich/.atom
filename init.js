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

import {usePackage, configSet} from "./use-package";

const myFont = "Hasklig";

// Core settings
configSet("welcome", {
  showOnStartup: false
});

configSet("core", {
  telemetryConsent: "no",
  openEmptyEditorOnStart: false,
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

// Regain control of my key bindings
usePackage("disable-keybindings", {
  config: {
    allCommunityPackages: true,
    exceptCommunityPackages: []
  }
});

// Files
usePackage("file-watcher", {
  config: {
    autoReload: true
  }
});

// Editing
usePackage("expand-region", {
  keymap: {
    "atom-text-editor:not([mini])": {
      "alt-up": "expand",
      "alt-down": "shrink"
    }
  }
});

usePackage("spaces-in-braces", {
  enableKeys: true
});
usePackage("underline-trailing-whitespace");

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
usePackage("hyperclick", {
  enableKeys: true
});
usePackage("hyperlink-hyperclick");

// Coding
usePackage("linter", {
  enableKeys: true,
  config: {
    // Check less aggressively
    lintOnFlyInterval: 1000,
    // Show "line" tab in status bar
    showErrorTabLine: true
  }
});

// Version control
usePackage("git-plus", {
  enableKeys: true, // TODO: Maybe find a better keymap?
  config: {
    commits: {
      verboseCommits: true
    }
  }
});
usePackage("git-log");
usePackage("git-time-machine");
usePackage("merge-conflicts");

// Javascript
usePackage("js-hyperclick");
usePackage("linter-eslint");
usePackage("run-in-atom", { // Run JS code right in Atom
  enableKeys: true
});

// Misc languages
usePackage("language-ignore"); // Ignore files

// Utilities
usePackage("atom-oss-license");
usePackage("platformio-ide-terminal", {
  enableKeys: true,
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
usePackage("dash", {
  enableKeys: true
});
