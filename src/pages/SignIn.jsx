import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityICON from '../assets/svg/visibilityIcon.svg';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back!</p>
        </header>
        <form>
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
          <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              id='password'
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityICON}
              className='showPassword'
              alt='showPassword'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot Password
          </Link>
          <div className='signInBar'>
            <p className='signInText'>Sign In</p>
            <button className='signInButton'>
              <ArrowRightIcon fill='#FFFFFF' width='34px' height='34px' />
            </button>
          </div>
        </form>
        <Link to='/sign-up' className='registerLink'>
          Sign Up Instead
        </Link>
      </div>
    </>
  );
}
