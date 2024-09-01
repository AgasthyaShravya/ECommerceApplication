import React from 'react'
import './Popular.css'
import product_data from '../Assets/Frontend_Assets/data'
import data_product from '../Assets/Frontend_Assets/popular_men'
import data from '../Assets/Frontend_Assets/popular_kids'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Women's <span>Must-</span>Haves</h1><hr/>
        <div className='popular-item'>
        {product_data.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
        </div>
        <h1>Men's <span>Must-</span>Haves</h1><hr/>
        <div className='popular-item'>
        {data_product.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
        </div>
        <h1>Kid's <span>Must-</span>Haves</h1><hr/>
        <div className='popular-item'>
        {data.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
        </div>
    </div>
  )
}

export default Popular;