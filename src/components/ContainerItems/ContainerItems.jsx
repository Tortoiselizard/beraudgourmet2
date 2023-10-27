import Image from 'next/image'
import items from './menuStore.json'
import style from './ContainerItems.module.css'

function ContainerItems () {
  return (
    <div>
      <h1>Estoy en el contenedor</h1>
      <ul className={style.listItems}>
        {
            items.map(item => (
              <li key={item.name}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                />
                <label>{item.name}</label>
                <span>${item.price}</span>
                <p>{item.text}</p>
              </li>
            ))
        }
      </ul>
    </div>
  )
}

export default ContainerItems
