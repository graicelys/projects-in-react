import { useState } from "react";
export function TwitterCard({userName, name, initialIsFollowing, children})
{
    const imgeSrc = `https://unavatar.io/${userName}`
    const [isFollowing, setIsFollowing ] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return(
            <article className='tw-followCard'>
                <header className='tw-followCard-header'>
                    <img className='tw-followCard-avatar'
                    alt="Avatar 1" 
                    src={imgeSrc} />
                    <div className='tw-followCard-user'>
                        <strong>{children}</strong>
                        <span className='tw-followCard-userSpan'>@{userName}</span>
                    </div>
                </header>
                
            <aside>
                <button className={buttonClassName} onClick={handleClick}> 
                    <span className='tw-followCard-text'>{text}</span> 
                    <span className='tw-followCard-stop'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}