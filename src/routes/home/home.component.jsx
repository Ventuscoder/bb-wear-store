import Directory from '../../components/directory/directory.component'

function Home() {

  const categories = [
    { id: 1, title: 'Jordan', img: 'jordan-cover.jpg' },
    { id: 2, title: 'KD', img: 'kd-cover.jpg' },
    { id: 3, title: 'LeBron', img: 'lebron-cover.jpg' },
    { id: 4, title: 'Curry', img: 'curry-cover.jpg' },
    { id: 5, title: 'Giannis', img: 'giannis-cover.jpg' }
  ]

  return (
    <Directory categories={categories} />
  )
}

export default Home
