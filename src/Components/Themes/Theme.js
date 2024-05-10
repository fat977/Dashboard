import './Theme.scss'
export default function Theme({color , setColor}) {
  return <div onClick={setColor} className="color-item" style={{'--bg-color' : color}}>

  </div>;
}
