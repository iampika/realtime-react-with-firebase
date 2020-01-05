import React from 'react'
import { Link } from '@reach/router'
import { firebase } from './firebase'
import useCollection from './useCollection'

const Nav = ({ user }) => {
  const channels = useCollection('channels')

  const handleSignOut = () => {
    firebase.auth().signOut()
  }

  return (
    <div className="Nav">
      <div className="User">
        <img
          className="UserImage"
          alt="whatever"
          src={user.photoURL}
        />
        <div>
          <div>{user.displayName}</div>
          <div>
            <button
              onClick={handleSignOut}
              type="button"
              className="text-button"
            >
              log out
            </button>
          </div>
        </div>
      </div>
      <nav className="ChannelNav">
        {channels.map(channel => (
          <Link key={channel.id} to={`/channel/${channel.id}`}>
            # {channel.id}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Nav
