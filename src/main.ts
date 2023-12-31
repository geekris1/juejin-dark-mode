import { GM_addStyle } from '$';
import { backgroundColor } from './constants';
import './style.css';
import { darkLogoReplace, generatedStyle, getBodyThemeValue, observerBodyDataTheme, setBodyThemeDataDark } from './unitls';


(() => {
  const themeConfigString = window.localStorage.getItem("juejin_2608_theme");
  let themeConfig;
  if (themeConfigString) {
    themeConfig = JSON.parse(themeConfigString)
  }
  // TODO: 是否需要根据themeConfig.isFollowSystem来判断系统是否为黑暗模式
  // window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  console.log(themeConfig, 'themeConfig')
  if (themeConfig.theme === 'dark') {
    if (getBodyThemeValue() === 'light') {
      setBodyThemeDataDark()
      darkLogoReplace()
    }

    observerBodyDataTheme((theme) => {
      if (theme === 'light') {
        setBodyThemeDataDark()
        darkLogoReplace()
      }
    })

    // https://juejin.cn/user
    GM_addStyle(
      generatedStyle({
        '.user-info-block': {
          ...backgroundColor
        }
      })
    )
  }
})()