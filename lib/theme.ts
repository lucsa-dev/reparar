export const THEME_STORAGE_KEY = "theme";

/** Runs before first paint so a saved dark theme does not flash light. */
export const themeInitScript = `try{if(localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`;
