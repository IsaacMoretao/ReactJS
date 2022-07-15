import './styles.scss';

export type CardProps ={
  name: string,
  time: string
}

export function Card(props: CardProps)  {
  return (
    <div className='Cards'>
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}