import localFont from 'next/font/local'

export const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

export const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const meslo = localFont({
  src: [
    {
      path: './fonts/MesloLGS-NF-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/MesloLGS-NF-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/MesloLGS-NF-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/MesloLGS-NF-Bold-Italic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-meslo',
})
