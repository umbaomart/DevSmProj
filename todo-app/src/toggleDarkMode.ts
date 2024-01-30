export function toggleDarkMode() {

    let themeMode = checkLocalStorageTheme()
    let darkModeMediaQuery: { matches: boolean } = window.matchMedia('(prefers-color-scheme: dark)');
    const isDarkMode: boolean = darkModeMediaQuery.matches;

    themeMode === null && setTheme(isDarkMode);

    // Event listener for changing theme mode
    darkModeMediaQuery.addEventListener('change', handleThemeChange);
}

function handleThemeChange() {
    const darkModeMediaQuery: { matches: boolean } = window.matchMedia('(prefers-color-scheme: dark)');
    const isDarkMode: boolean = darkModeMediaQuery.matches;
    setTheme(isDarkMode);
}

function checkLocalStorageTheme(): string | null {
    const themeMode: string | null = localStorage.getItem('theme');

    themeMode === "Dark" ?
        document.documentElement.classList.add('dark') :
        document.documentElement.classList.remove('dark');

    return themeMode;
}

function setTheme(modeType: boolean) {
    const textThemeMode__div = document.getElementById<HTMLDivElement>('js--themeMode')!;

    // Check theme if it's dark or light
    const systemTheme: string = modeType === true ? 'Dark' : 'Light';
    textThemeMode__div.innerText = systemTheme ? systemTheme + ' Theme' : '';

    // Set theme to localStorage
    localStorage.setItem('theme', systemTheme);

    // Apply theme to html
    systemTheme === "Dark" ?
        document.documentElement.classList.add('dark') :
        document.documentElement.classList.remove('dark');
}