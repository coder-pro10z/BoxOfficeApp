import React from 'react'
import {NavList,LinkStyled} from  '../components/show/Navs.styled'
import { useLocation } from 'react-router-dom'
const LINKS=[
{to:'/',text:'Home'},
{to:'/starred',text:'Starred'},
]
export const Navs = () => {

  const location =useLocation()
  console.log(location);
  return (
    <div>
      <NavList>
        {
        LINKS.map(item=><li key={item.to}>
          <LinkStyled to={item.to}
          className={item.to===location.pathname?'active':''} >
        
        {item.text}
        </LinkStyled>
        </li>)

        }
        </NavList>
        </div>

  )
}

export default Navs 