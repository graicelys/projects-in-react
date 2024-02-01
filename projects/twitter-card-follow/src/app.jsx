import { useState } from 'react'
import './app.css'
import { TwitterCard } from './TwitterCard.jsx'

const users =[
    {
        userName: 'Avatar1',
        name: 'Pablo Ramos',
        isFollowing: true
    },
    {
        userName: 'lol',
        name: 'Pablo Gomez',
        isFollowing: false
    },
    {
        userName: 'Perezz14',
        name: 'Luis Gomez',
        isFollowing: false
    },
    {
        userName: 'user1475',
        name: 'Carlo12',
        isFollowing: true
    }
]

export function App ()
{
    //const format = (userName) => `@${userName}`
    return(
        <section className='App'>
            { /* comentario dentro de rendel return */ }
            {
                users.map(user=>{
                    const { userName,name,isFollowing } = user
                        return(
                            <TwitterCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing} 
                        >
                            {name}
                        </TwitterCard>
                   )
               })

            }
            
        </section>
    )
}