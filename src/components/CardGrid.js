import React from 'react'
import CardItem from './CardItem'


const CardGrid = ({items, isLoading}) => {
  return (
    <div>
        {isLoading ? (<h1>Loading...</h1>) : (
            <section className='cards'>
                {items.map(item => <CardItem key={item.id} item={item}/>)}
            </section>
        )}
        </div>
  )
}

export default CardGrid