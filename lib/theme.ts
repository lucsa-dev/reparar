export const THEME_STORAGE_KEY = "site-theme";

/** Dark is the default; this runs before first paint so a saved light theme does not flash dark. */
export const themeInitScript = `try{if(localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})==="light")document.documentElement.dataset.theme="light"}catch(e){}`;
