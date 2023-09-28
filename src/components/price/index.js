import dynamic from 'next/dynamic'

const Price = dynamic(() => import('./price'), {
  ssr: false
})

export default () => <Price />