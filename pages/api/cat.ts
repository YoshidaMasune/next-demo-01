import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

interface cat {
   breeds: string
   country: string
   flagImg: string
   img: string[]
   info_1?: string
   info_2?: string
   info_3?: string
}



const topcat:cat[] = [
   {
      breeds: 'american cc',
      country: 'usa',
      flagImg: '/img/flag/01.jpg',
      img: ['/img/logo.png'],
   },
   {
      breeds: 'american cc',
      country: 'usa',
      flagImg: '/img/flag/01.jpg',
      img: ['/img/logo.png'],
   },
   {
      breeds: 'american cc',
      country: 'usa',
      flagImg: '/img/flag/01.jpg',
      img: ['/img/logo.png'],
   },{
      breeds: 'american cc',
      country: 'usa',
      flagImg: '/img/flag/01.jpg',
      img: ['/img/logo.png'],
   },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<cat>>
) {
  res.json(topcat)
}
