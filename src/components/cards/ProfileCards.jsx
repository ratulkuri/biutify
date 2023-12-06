import Ratings from "../Ratings"
import { FaUserShield, FaMapMarkerAlt } from "react-icons/fa";

const ProfileCards = ({profile = {}}) => {
  return (
    <>
        {
            Object.keys(profile).length > 0 &&
            <div className="profile-card">
                <div className="avatar-wrap">
                    <img loading="lazy" src={profile?.avatar} alt="avatar" />
                </div>
                <div className="d-flex flex-column align-items-center gap-2">
                    <h3 className="name">
                        {profile?.completed && <FaUserShield className="icon" />}
                        <span>{profile?.name}</span>
                    </h3>
                    {
                        profile?.rating &&
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <Ratings rating={profile?.rating} />
                            <span className="ms-1">({profile?.reviews})</span>
                        </div>
                    }
                    <div className="skills d-flex flex-wrap gap-2 justify-content-center">
                        {
                            profile?.skills?.length > 0 &&
                            profile?.skills?.map(skill => (
                                <span className="px-3 py-1 rounded theme-bg text-white" key={`skill-${skill}`}>{skill}</span>
                            ))
                        }
                    </div>
                    {
                        profile?.city &&
                        <div className="d-flex align-items-center gap-2 my-3">
                            <FaMapMarkerAlt className="text-danger" />
                            {profile?.city}
                        </div>
                    }
                    <div className="services">
                        {
                            profile?.services?.length > 0 &&
                            profile?.services?.map((service, index) => {
                                if (index < 4) {
                                    return <img loading="lazy" className="service" key={`service-${index}`} src={service?.img} alt={service?.name} />
                                }
                            })
                        }
                    </div>
                    <div className="actions">
                        <button className={`${profile?.completed ? '' : 'outline'} theme-btn rounded text-uppercase my-4`}>Profilo Completo</button>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default ProfileCards