import profilePicture from '../assets/profile__img.png';
import share from '../assets/_Avatar share button.png';
import hover from '../assets/hover.png';
import option from '../assets/mobile_Avatar share button.png';

const Header = () => {
  const twitter = 'https://twitter.com/ibn_momoh';

  return (
    <header>
      <div className='profile'>
        <img src={profilePicture} alt='profile' id='profile_img' />
        <img src={hover} alt='profile' id='profile_img' className='hover' />
        <a href={twitter} id='twitter'>
          Momoh Abdulsamad
        </a>
        <h1 className='hidden' id='slack'>
          Momoh Abdulsamad
        </h1>
      </div>
      <div className='share'>
        <img src={share} alt='share' className='share_icon' />
        <img src={option} alt='option' className='option_icon' />
      </div>
    </header>
  );
};

export default Header;
