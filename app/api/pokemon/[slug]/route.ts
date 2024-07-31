import { NextRouter } from 'next/router'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest, context: any) {
  console.log('🚀 ~ GET ~ context:', context)
  console.log('🚀 ~ handler ~ request:', request)
  const slug = context.params?.slug

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}/`)
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    } else {
      return NextResponse.json({ error: 'Unknown error' }, { status: 500 })
    }
  }
}

export async function POST(request: NextRequest) {
  // console.log('🚀 ~ POST ~ context:', context)
  console.log('🚀 ~ POST ~ request:', request)
  // const { searchParams } = new URL(request.url)
  // const id = searchParams.get('id')

  const data = await request.json()

  return NextResponse.json({
    hello: 'world',
    data,
  })
}
