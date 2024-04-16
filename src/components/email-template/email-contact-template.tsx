import * as React from 'react'

interface EmailTemplateProps {
  buttonUrl: string
}

export const EmailContactTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  buttonUrl
}) => (
  <div
    style={{
      padding: '20px',
      backgroundColor: 'white',
      display: 'grid',
      justifyItems: 'center'
    }}
  >
    <span style={{ textAlign: 'justify' }}>
      Tu solicitud ha sido enviada con éxito. Para añadir comentarios adicionales, por favor responde a este mensaje.
      <br /><br />
      Saludos. El equipo de Muscari Clothing
    </span>
  </div>
)