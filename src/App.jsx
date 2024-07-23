import ShopItemClass from '../components/ShopItemClass/ShopItemClass'
import Item from './js/Item'

function App() {
  return (
    <div className='container'>
      <div className='background-element'></div>
      <div className='highlight-window'>
        <div className='highlight-overlay'></div>
      </div>
      <div className='window'>
        <ShopItemClass
          item={
            new Item(
              'Tiger of Sweden',
              'Leonard coat',
              'Minimalistic coat in cotton-blend',
              'Minimalistic overcoat made from felt. It is a short sleeves coat and is in.',
              399,
              '£'
            )
          }
        />
      </div>
    </div>
  )
}

export default App
