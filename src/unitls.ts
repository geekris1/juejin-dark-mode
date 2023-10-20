
type ThemeValue = 'dark' | 'light'
export function getBodyThemeValue(): ThemeValue {
  return (document.body.getAttribute('data-theme') as ThemeValue)
}

export function setBodyThemeDataDark() {
  document.body.setAttribute('data-theme', "dark")
}

export function observerBodyDataTheme(callback: (themeValue: ThemeValue) => void) {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      console.log(mutation, 'mutation')
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        // @ts-ignore
        const currentDataTheme = mutation.target.getAttribute('data-theme');
        // if
        callback(currentDataTheme)
        console.log(`data-theme 属性的新值是: ${currentDataTheme}`);
      }
    }
  });
  const observerElement = document.body;
  observer.observe(observerElement, { attributes: true });
}

type GeneratedStyleValue = Record<string, Record<string, string>>



export function generatedStyle(value: GeneratedStyleValue): string {
  let result: string = '';
  Object.entries(value).forEach(([key, value]) => {
    result += `${key} {`
    Object.entries(value).forEach(([key, value], index, current) => {
      result += `${key}:${value}${index + 1 === current.length ? "" : ";"}`
    })
    result += '};'
  })
  return result
}