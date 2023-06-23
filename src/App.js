import './categories.styles.scss'

function App() {

  const categories = [
    { id: 1, title: 'Jordan', img: 'jordan-cover.jpg' },
    { id: 2, title: 'KD', img: 'kd-cover.jpg' },
    { id: 3, title: 'LeBron', img: 'lebron-cover.jpg' },
    { id: 4, title: 'Curry', img: 'curry-cover.jpg' },
    { id: 5, title: 'Giannis', img: 'giannis-cover.jpg' }
  ]

  return (
    <div className='categories-container'>
      {categories.map(({title, id, img}) => (
        <div key={id} className='category-container'>
          <img src={'images/'+img} alt='' />
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App;
