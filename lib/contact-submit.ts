type Web3FormsResponse = {
  success: boolean
  message?: string
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

/**
 * Sends a contact form via Web3Forms (FormData, official API style).
 * Destination email = email used when creating the access key.
 * Requires NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
 */
export async function submitContactForm(form: HTMLFormElement): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error('MISSING_ACCESS_KEY')
  }

  const formData = new FormData(form)
  const name = String(formData.get('name') ?? '').trim()

  formData.append('access_key', accessKey)
  formData.append('subject', `Contacto BITFLOW — ${name || 'Nuevo mensaje'}`)
  formData.append('from_name', 'BITFLOW Landing')

  const replyTo = String(formData.get('email') ?? '').trim()
  if (replyTo) {
    formData.append('replyto', replyTo)
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    body: formData,
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
