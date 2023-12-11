'use client'

import { useTheme } from 'next-themes'

export const Utterances = () => {
  const { theme } = useTheme()

  return (
    <section
      style={{ width: '100%' }}
      ref={(element) => {
        if (!element) return

        const scriptElement = document.createElement('script')
        scriptElement.setAttribute('src', 'https://utteranc.es/client.js')
        scriptElement.setAttribute('repo', 'paulcjy/paulcjy.github.io')
        scriptElement.setAttribute('issue-term', 'pathname')
        scriptElement.setAttribute('label', '✨💬✨')
        scriptElement.setAttribute(
          'theme',
          theme === 'light' ? 'github-light' : 'github-dark'
        )
        scriptElement.setAttribute('crossorigin', 'anonymous')
        scriptElement.setAttribute('async', 'true')
        element.replaceChildren(scriptElement)
      }}
    />
  )
}
