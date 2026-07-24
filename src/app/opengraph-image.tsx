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
          background: '#6d28d9',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: 160, color: 'white', fontWeight: 700, fontFamily: 'sans-serif', display: 'flex', alignItems: 'center' }}>
          .ts
        </div>
      </div>
    ),
    { ...size }
  )
}
