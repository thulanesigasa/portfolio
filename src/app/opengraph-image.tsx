import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'T.s Industries - Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="240" height="240" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="22" fill="#FE4300"/>
          <rect x="10" y="13" width="11" height="2.5" rx="1.25" fill="white"/>
          <rect x="14.75" y="13" width="2.5" height="16" rx="1.25" fill="white"/>
          <path d="M27 15.5 C27 14.5 28 13 30.5 13 C33 13 34 14.5 34 15.5 C34 17 33 17.8 31.5 18.5 C30 19.2 28.5 20 28.5 21.5 C28.5 23 29.5 24 31 24 C32.5 24 34 22.8 34 21.5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}
