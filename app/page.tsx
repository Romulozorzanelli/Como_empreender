'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Busca o conteúdo HTML e o carrega no iframe
    const fetchHTML = async () => {
      const response = await fetch('/apresentacao-empreender-v3.html')
      const html = await response.text()
      
      const iframe = document.getElementById('presentation-iframe') as HTMLIFrameElement
      if (iframe) {
        iframe.srcdoc = html
      }
    }
    
    fetchHTML()
  }, [])

  return (
    <main className="w-full h-screen bg-black">
      <iframe
        id="presentation-iframe"
        className="w-full h-full border-none"
        title="Apresentação"
      />
    </main>
  )
}
