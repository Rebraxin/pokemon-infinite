import React from 'react'
import Image from 'next/image'
import { getImageUrl } from '@/app/utils/imageUtils'
import { PokemonProps } from '@/app/page'
import Link from 'next/link'
import { extractIdFromUrl } from '@/app/utils/urlUtils'

const Card = (props: PokemonProps) => {
  const { name, url } = props

  return (
    <li className="card bg-slate-700 max-w-[350px] shadow-xl place-self-center">
      <figure>
        <Image src={getImageUrl(name)} width={350} height={350} alt={name} />
      </figure>
      <div className="card-body p-4 ">
        <h2 className="card-title">{name}</h2>
        <Link href={`/pokemon/${name}`} className="link link-info text-sm">
          Voir plus
        </Link>
      </div>
    </li>
  )
}

export default Card
