import DisplayData from '@/app/components/DisplayData/DisplayData'
import React from 'react'

const PokemonDetail = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  const getPokemonDetails = async () => {
    const res = await fetch(`http://localhost:3000/api/pokemon/${slug}`)
    if (!res.ok) {
      throw new Error('Failed to fetch pokemons')
    }

    return res.json()
  }

  const data = await getPokemonDetails()

  return (
    <div>
      <DisplayData data={data} />
      <h1>Pokemon Detail</h1>
    </div>
  )
}

export default PokemonDetail
