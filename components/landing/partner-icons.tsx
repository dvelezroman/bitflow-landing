import type { SimpleIcon } from 'simple-icons'
import {
  siAmazonaws,
  siEthereum,
  siGooglecloud,
  siGraphql,
  siIpfs,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siOpenapiinitiative,
  siOpensea,
  siPolygon,
  siPostgresql,
  siReact,
  siSolidity,
  siTerraform,
  siTypescript,
  siWalletconnect,
} from 'simple-icons/icons'

/** Slug → icon from Simple Icons (CC0). https://simpleicons.org — see package DISCLAIMER. */
export const PARTNER_SIMPLE_ICONS: Record<string, SimpleIcon> = {
  amazonaws: siAmazonaws,
  googlecloud: siGooglecloud,
  terraform: siTerraform,
  ethereum: siEthereum,
  polygon: siPolygon,
  solidity: siSolidity,
  ipfs: siIpfs,
  opensea: siOpensea,
  walletconnect: siWalletconnect,
  react: siReact,
  nextdotjs: siNextdotjs,
  nestjs: siNestjs,
  nodedotjs: siNodedotjs,
  postgresql: siPostgresql,
  typescript: siTypescript,
  openapiinitiative: siOpenapiinitiative,
  graphql: siGraphql,
}

export function PartnerSimpleIcon({ slug, className }: { slug: string; className?: string }) {
  const icon = PARTNER_SIMPLE_ICONS[slug]
  if (!icon) return null
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  )
}
