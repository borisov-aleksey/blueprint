/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 - http://www.apache.org/licenses/LICENSE-2.0
 */

export * from "./common"
export * from "./components";
export { IconClasses } from "./generated/iconClasses";
export { IconContents } from "./generated/iconStrings";
import { isBrowser, noop } from './common/utils';

import { InteractionModeEngine } from "./common/interactionMode";

export const FOCUS_DISABLED_CLASS = "pt-focus-disabled";

// We only need to listen for interactions in browser
// so the engine can be mocked in server context ie. node
const focusEngine = isBrowser()
    ? new InteractionModeEngine(document.documentElement, FOCUS_DISABLED_CLASS)
    : { start: noop, stop: noop, isActive: noop };

export const FocusStyleManager = {
    alwaysShowFocus: () => focusEngine.stop(),
    isActive: () => focusEngine.isActive(),
    onlyShowFocusOnTabs: () => focusEngine.start(),
};
