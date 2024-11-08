import React, {useState, useEffect, useRef} from 'react'
import BlurFade from '../components/BlurFade'
import BoxReveal from '../components/BoxReveal'
import { useTheme } from '../context/ThemeContext'
import emailjs from 'emailjs-com'

const Contact = () => {
  const {darkMode, setDarkMode} = useTheme();
  const [formData, setFormData] = useState({
    name : "",
    subject : "",
    message : ""
  })
    const inputName = useRef(null);
    const inputEmail = useRef(null);
    const inputMsg = useRef(null);

    const [submit, setSubmit] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);

  function handleSubmit(e){
    e.preventDefault();
    if(!formData.name){
      inputName.current.focus();
    }
    else if(!formData.email){
        inputEmail.current.focus();
    }
    else if(!formData.message){
        inputMsg.current.focus();
    }
    setSubmit(true);
    if(formData.name && formData.email && formData.message){
        sendMessage();
    }
  }

  function sendMessage(){
    emailjs.send(
      'service_rboheqj',
      'template_ymm8syd',
      formData,
      'JXf5tq_ql3pfepBf-'
    ).then((res)=>{
      console.log('SUCCESS!', res.status, res.text);
      setStatusMessage({status: 'success', msg : 'Message sent sucessfully!'});
      setFormData({name : '', email : '', message : ''});
      setTimeout(()=>{
        setStatusMessage('');
      }, 3000)
    }).catch((err)=>{
      console.log('FAILED...', err);
      setStatusMessage({status: 'success', msg :'Failed to send the message. Please try again later.'});
      setTimeout(()=>{
        setStatusMessage('');
      }, 3000)
    })
  }
  
useEffect(()=>{
    inputName.current.focus();
  }, [])

  return (
    <div className="grid place-items-center min-h-screen gap-8 p-8  mt-28 rounded-lg backdrop-filter text-wrap backdrop-blur-lg bg-glass dark:bg-glass-dark w">
      <div>
      <h3 className="text-3xl mb-12 font-bold tracking-tighter sm:text-5xl">
         <BlurFade delay={0.6}><span className=''>Get in touch with me...
          </span>
          </BlurFade>
      </h3>
      {statusMessage && 
        <BlurFade duration={0.4}>
        <p className={`mt-4 text-2xl  ${statusMessage.status === "success" ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400'}`}>{statusMessage.msg}</p>
        </BlurFade>}
      <BlurFade delay={0.6} duration={0.8} inView={true}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
      {submit && !formData.name ? <label className='form-label'>Please enter your name</label> : null}
          <input
          ref={inputName}
          type="text"
          name="name"
          value={formData.name}
          onChange={(e)=> setFormData({...formData, name : e.target.value})}
          placeholder="Your Name"
          required
          className="p-2 rounded-md border dark:bg-gray-800"
          />
          {submit && !formData.email ? <label className='form-label'>Please enter your name</label> : null}
          <input
          ref={inputEmail}
            type="email"
            name="email"
            value={formData.email}
            onChange={(e)=> setFormData({...formData, email : e.target.value})}
            placeholder="Your Email"
            required
            className="p-2 rounded-md border dark:bg-gray-800"
            />
            {submit && !formData.message ? <label className='form-label'>Please enter your name</label> : null}
          <textarea
          ref={inputMsg}
            name="message"
            value={formData.message}
            onChange={(e)=> setFormData({...formData, message : e.target.value})}
            placeholder="Your Message"
            required
            className="p-2 rounded-md border dark:bg-gray-800"
          />
          <button
            type="submit"
            className="p-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          >
            Send Message
          </button>
        </form>
        </BlurFade>
        
      </div>
      <div>
      <h3 className="text-3xl mb-10 mt-[3vh] text-center font-bold tracking-tighter sm:text-5xl">
         <BlurFade inView={true} delay={0.6}><span className=''>Me-Online
          </span>
          </BlurFade>
        </h3>
      <BlurFade className={'flex flex-col w-full gap-10 content-center justify-center'} delay={0.1} inView={true}>
      <ul className="list-none flex justify-center mb-8 gap-4 h-fit text-indigo-500">
            <BoxReveal boxDelay={0.4} slideDelay={0.4} boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover: duration-150 delay-200 transition-colors" href={'https://github.com/athrvdev'}>GitHub</a>
              </BoxReveal>
              <BoxReveal boxDelay={0.45} slideDelay={0.45}  boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors" href={'https://linkedin.com/in/atharva-kulkarni-cs06'}>LinkedIn</a>
              </BoxReveal>
              <BoxReveal  boxDelay={0.5} slideDelay={0.5}  boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors" href={'https://instagram.com/sarcastharv/'}>Instagram</a>
              </BoxReveal>
              <BoxReveal  boxDelay={0.55} slideDelay={0.55}  boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors" href={'https://leetcode.com/u/AtharvaKulkarni612/'}>Leetcode</a>
              </BoxReveal>
        </ul>
      </BlurFade>
      </div>
    </div>
  )
}

export default Contact