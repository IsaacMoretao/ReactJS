import './styles.scss'

export function Card(props)  {
  return (
    <div className='Cards'>
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}