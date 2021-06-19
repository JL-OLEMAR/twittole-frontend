import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

import EditUserForm from '../EditUserForm'
import ConfigModal from '../../Modal/ConfigModal'
import { API_HOST } from '../../../utils/constants'
import { checkFollowApi, followUserApi, unfollowUserApi } from '../../../api/follow'
import AvatarNotFound from '../../../assets/png/avatar-no-found.png'
import './BannerAvatar.scss'

export default function BannerAvatar ({ user, loggedUser }) {
  const [showModal, setShowModal] = useState(false)
  const [following, setFollowing] = useState(null)
  const [reloadFollow, setReloadFollow] = useState(false)

  const bannerUrl = user?.banner
    ? `${API_HOST}/obtenerBanner?id=${user.id}`
    : null

  const avatarUrl = user?.banner
    ? `${API_HOST}/obtenerAvatar?id=${user.id}`
    : AvatarNotFound

  useEffect(() => {
    if (user) {
      checkFollowApi(user?.id).then(response => {
        if (response?.status) {
          setFollowing(true)
        } else {
          setFollowing(false)
        }
      })
    }
    setReloadFollow(false)
  }, [user, reloadFollow])

  const onFollow = () => {
    followUserApi(user.id).then(() => {
      setReloadFollow(true)
    })
  }

  const onUnFollow = () => {
    unfollowUserApi(user.id).then(() => {
      setReloadFollow(true)
    })
  }

  return (
    <div className="banner-avatar" style={{ backgroundImage: `url('${bannerUrl}')` }}>
      <div className="avatar" style={{ backgroundImage: `url('${avatarUrl}')` }} />

      {user && (
        <div className="options">
          {loggedUser._id === user.id && (
            <Button
              variant="outline-primary"
              onClick={() => setShowModal(true)}
            >
              Editar perfil
            </Button>
          )}

          {loggedUser._id !== user.id &&
            following !== null &&
            (following
              ? (<Button onClick={onUnFollow} className="unfollow">
                <span>Siguiendo</span>
              </Button>)
              : (<Button onClick={onFollow}>Seguir</Button>)
            )
          }
        </div>
      )}

      <ConfigModal
        show={showModal}
        setShow={setShowModal}
        title="Editar perfil"
      >
        <EditUserForm user={user} setShowModal={setShowModal} />
      </ConfigModal>
    </div>
  )
}
