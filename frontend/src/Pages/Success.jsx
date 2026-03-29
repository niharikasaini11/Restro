import React, { useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {

    const timeOutId = setInterval(() => {
      setCountdown(preCount => {
        if(preCount === 1){
          clearInterval(timeOutId)
          navigate("/");
        }
        return preCount-1;
      })
    }, 1000);
    return () => clearInterval(timeOutId);
  },[navigate])

  return <>
      <section className='notFound'>
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>REDIRECTING TO HOME IN {countdown} SECONDS...</h1>
          <Link to={'/'}>Back to Home<HiOutlineArrowNarrowRight/></Link>
        </div>
      </section>
    </>
}

export default Success
