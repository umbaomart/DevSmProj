export function toggleDarkMode() {

    let themeMode = checkLocalStorageTheme()
    let darkModeMediaQuery: { matches: boolean } = window.matchMedia('(prefers-color-scheme: dark)');
    const isDarkMode: boolean = darkModeMediaQuery.matches;
    const darkToggleInput = document.getElementById<HTMLInputElement>('dark-toggle')!;
    const isModeType = checkLocalStorageTheme() === 'Dark' ? true : false

    themeMode === null ? setTheme(isDarkMode) : setTheme(isModeType);

    darkToggleInput.addEventListener('click', toggleThemeMode);
    darkModeMediaQuery.onchange = handleThemeChange;
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

    const darkToggle = document.getElementById<HTMLInputElement>('dark-toggle')!;

    // Set checkbox to checked
    if (modeType) {
        darkToggle.checked = true;
    }

    // Set theme to localStorage
    localStorage.setItem('theme', systemTheme);

    // Apply theme to html
    systemTheme === "Dark" ?
        document.documentElement.classList.add('dark') :
        document.documentElement.classList.remove('dark');
}

function toggleThemeMode() {
    const currentMode = checkLocalStorageTheme();
    const isModeType = currentMode === 'Dark' ? true : false;

    if(isModeType) {
        setTheme(!isModeType);
        document.querySelector<HTMLElement>("html")?.classList.remove("dark");
    } else {
        setTheme(!isModeType);
        document.querySelector<HTMLElement>("html")?.classList.add("dark");
    }
}