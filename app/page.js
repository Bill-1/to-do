import Image from 'next/image'
import styles from './page.module.css'
import List from '../component/list'
export default function Home() {
  return (<div style = {{display:'flex', alignItems:'center', height: '100vh', flexDirection: 'column', justifyContent: 'center'}}>
    <List name = "sda"/>
    <List/>
    <List/>
    <List/>
  </div>);
}
