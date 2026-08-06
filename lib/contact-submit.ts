export type ContactPayload = {
  name: string
  email: string
  phone?: string
  service: string
  message: string
}

type Web3FormsResponse = {
  success: boolean
  message?: string
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

/**
 * Sends contact form data via Web3Forms.
 * Destination email is the one registered with the access key (dvelezroman@gmail.com).
 * Requires NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (free at https://web3forms.com).
 */
export async function submitContactForm(payload: ContactPayload): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error('MISSING_ACCESS_KEY')
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Contacto BITFLOW — ${payload.name}`,
      from_name: 'BITFLOW Landing',
      replyto: payload.email,
      name: payload.name,
      email: payload.email,
      phone: payload.phone || '—',
      service: payload.service,
      message: payload.message,
    }),
  })

  let data: Web3FormsResponse | null = null
  try {
    data = (await response.json()) as Web3FormsResponse
  } catch {
    throw new Error('INVALID_RESPONSE')
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'SUBMIT_FAILED')
  }
}
