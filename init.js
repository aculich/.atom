'use babel';

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

import {usePackage, configSet} from './use-package'

configSet('welcome', {
  showOnStartup: false
});

configSet('core', {
  telemetryConsent: 'no',
  openEmptyEditorOnStart: false,
  themes: ['atom-light-ui', 'solarized-light-syntax']
});

configSet('editor', {
  fontFamily: 'Hasklig',
  lineHeight: 1.35,
  fontSize: 14,
  softWrap: true,
  softWrapAtPreferredLineLength: true,
  tabType: 'soft'
});

// Utilities
usePackage('atom-oss-license');

atom.notifications.addSuccess('Hello world, my dear Atom!');
