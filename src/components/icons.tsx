import {
  Solidity,
  Nodedotjs,
  Nextdotjs,
  Typescript,
  Express,
  Prisma,
  Trpc,
  Rust,
  Bun,
  Deno,
  ReactJs,
  Sass,
  Astro,
  Tailwindcss,
  Mdx,
  Threedotjs,
  Blender,
  Inkscape,
  Figma,
  Svelte,
  Webassembly,
} from '@icons-pack/react-simple-icons'
import Foundry from './Foundry'

const icons = {
  Solidity,
  Nodedotjs,
  Nextdotjs,
  Typescript,
  Express,
  Foundry,
  Prisma,
  Trpc,
  Rust,
  Bun,
  Deno,
  ReactJs,
  Sass,
  Astro,
  Tailwindcss,
  Mdx,
  Threedotjs,
  Blender,
  Inkscape,
  Figma,
  Svelte,
  Webassembly,
}

export const iconComponents = Object.fromEntries(
  Object.entries(icons).map(([key, Val]) => [key, () => <Val size="1em" color="white" />])
)
