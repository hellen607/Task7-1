import './Specializations.css'
import asterisk from './../../assets/images/asterisk.svg'

export default function Specializations() {
  return (
    <div className='container specilaize '>
    <ul className='flex-list '>
        <li><img src={asterisk} alt="asterisk" />Cyber Security</li>
        <li><img src={asterisk} alt="asterisk" />IT Solution</li>
        <li><img src={asterisk} alt="asterisk" />Technology</li>
        <li><img src={asterisk} alt="asterisk" />Data secure</li>
    </ul>
</div>
  )
}
