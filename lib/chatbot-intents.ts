/**
 * Intents for the on-site assistant. First match wins — list is ordered most → least specific.
 * Keywords work in ES/EN (normalized: lowercase, no accents).
 */

export const CONTACT_ANSWER_KEY = 'chatbot.answers.contactPrompt'
export const FALLBACK_ANSWER_KEY = 'chatbot.answers.fallback'

export type ChatIntentMatch = {
  answerKey: string
  openContact: boolean
}

export const CHAT_INTENTS: { keywords: string[]; answerKey: string }[] = [
  {
    keywords: [
      'por que bitflow',
      'por qué bitflow',
      'why bitflow',
      'no bullshit',
      'sin humo',
      'sin vueltas',
      'software serio',
      'promesas vacias',
      'promesas vacías',
      'plagio',
      'plagiarism',
      'mantenible',
      'mantenimiento codigo',
      'calidad software',
      'etica',
      'ética',
      'transparencia',
    ],
    answerKey: 'chatbot.answers.philosophy',
  },
  {
    keywords: ['blockchain', 'web3', 'hyperledger', 'ethereum', 'ipfs', 'solidity', 'nft', 'wallet'],
    answerKey: 'chatbot.answers.blockchain',
  },
  {
    keywords: ['aws', 'google cloud', 'gcp', 'partner nube', 'cloud partner', 'infraestructura nube'],
    answerKey: 'chatbot.answers.cloud',
  },
  {
    keywords: [
      'casos exitosos',
      'success stories',
      'proyectos entregados',
      'casos de estudio',
      'case studies',
    ],
    answerKey: 'chatbot.answers.successStories',
  },
  {
    keywords: [
      'proyectos bitflow',
      'proyectos desarrollados',
      'portfolio bitflow',
      'que han hecho',
      'trabajos realizados',
      'clientes bitflow',
    ],
    answerKey: 'chatbot.answers.projects',
  },
  {
    keywords: [
      'propiedad intelectual',
      'intellectual property',
      'el codigo es mio',
      'el código es mío',
      'codigo es nuestro',
      'código es nuestro',
      'ip ownership',
      'who owns the code',
    ],
    answerKey: 'chatbot.answers.ip',
  },
  {
    keywords: [
      'mantenimiento',
      'soporte',
      'maintenance',
      'support after',
      'post entrega',
      'post-entrega',
      'after launch',
      'sla',
    ],
    answerKey: 'chatbot.answers.support',
  },
  {
    keywords: ['testimonio', 'testimonios', 'opiniones', 'reviews', 'testimonials', 'clientes dicen'],
    answerKey: 'chatbot.answers.testimonials',
  },
  {
    keywords: ['faq', 'preguntas frecuentes', 'frequently asked', 'dudas frecuentes'],
    answerKey: 'chatbot.answers.faq',
  },
  {
    keywords: [
      'precio',
      'precios',
      'cotiz',
      'cotización',
      'costo',
      'cuanto cuesta',
      'how much',
      'pricing',
      'quote',
    ],
    answerKey: 'chatbot.answers.pricing',
  },
  {
    keywords: [
      'donde',
      'dónde',
      'ubicacion',
      'zona',
      'ciudad',
      'pais',
      'location',
      'where',
      'remoto',
      'remote',
    ],
    answerKey: 'chatbot.answers.location',
  },
  {
    keywords: ['plazo', 'tiempo', 'cuanto demora', 'how long', 'timeline'],
    answerKey: 'chatbot.answers.timing',
  },
  {
    keywords: ['como trabajan', 'cómo trabajan', 'proceso', 'etapas', 'how we work', 'methodology'],
    answerKey: 'chatbot.answers.process',
  },
  {
    keywords: ['consultoria', 'consultoría', 'consulting', 'roadmap', 'arquitectura'],
    answerKey: 'chatbot.answers.consulting',
  },
  {
    keywords: [
      'desarrollo software',
      'software a medida',
      'aplicacion',
      'aplicación',
      'backend',
      'codigo',
      'código',
      'custom software',
    ],
    answerKey: 'chatbot.answers.software',
  },
  {
    keywords: ['plataforma gestion', 'automatiz', 'erp', 'inventario', 'management platform'],
    answerKey: 'chatbot.answers.platforms',
  },
  {
    keywords: ['integracion', 'integración', 'apis', 'api', 'legacy', 'sistemas legacy'],
    answerKey: 'chatbot.answers.integrations',
  },
  {
    keywords: ['empresa', 'pyme', 'sme', 'startup', 'negocio'],
    answerKey: 'chatbot.answers.audience',
  },
  {
    keywords: ['quienes', 'quiénes', 'fundador', 'ceo', 'about bitflow', 'about you'],
    answerKey: 'chatbot.answers.about',
  },
  {
    keywords: [
      'whatsapp',
      'whats app',
      'correo',
      'email',
      'contacto',
      'hablar',
      'llamar',
      'dejar datos',
      'talk to',
      'reach',
      'contactar',
      'get in touch',
    ],
    answerKey: CONTACT_ANSWER_KEY,
  },
  {
    keywords: ['marca', 'marcas', 'alianza', 'partners', 'stack'],
    answerKey: 'chatbot.answers.partners',
  },
  {
    keywords: ['servicio', 'servicios', 'que hacen', 'qué hacen', 'what do you do', 'offer'],
    answerKey: 'chatbot.answers.services',
  },
]

export function normalizeChatInput(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9ñ\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function matchChatIntent(normalizedUserText: string): ChatIntentMatch {
  for (const intent of CHAT_INTENTS) {
    for (const kw of intent.keywords) {
      const n = normalizeChatInput(kw)
      if (n && normalizedUserText.includes(n)) {
        return {
          answerKey: intent.answerKey,
          openContact: intent.answerKey === CONTACT_ANSWER_KEY,
        }
      }
    }
  }
  return { answerKey: FALLBACK_ANSWER_KEY, openContact: false }
}
