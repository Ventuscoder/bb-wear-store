import { useNavigate } from 'react-router-dom'

import './category-item.styles.scss'

function CategoryItem({ category }) {
    const { title, img } = category
    const navigate = useNavigate()

    function goToShopHanlder() { navigate('/shop') }

    return (
        <div className='category-container'>
          <div className='background-image' style={{
            backgroundImage: `url(images/${img})`
          }}></div>
          <div className='category-body-container' onClick={goToShopHanlder}>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    )
}

export default CategoryItem