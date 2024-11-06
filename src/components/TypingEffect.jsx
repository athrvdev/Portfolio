import React, {useState, useEffect} from 'react'

const TypingEffect = ({roles, typingSpeed = 30, deletionSpeed = 100}) => {
    
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setDisplayedRole((prev) => prev.slice(0, -1));
        if (displayedRole.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setCharIndex(0)
        }
      } else {
        setDisplayedRole(currentRole.slice(0, charIndex + 1));
        if (charIndex < currentRole.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const typingInterval = setTimeout(handleTyping, isDeleting ? typingSpeed : deletionSpeed);

    return () => clearTimeout(typingInterval);
  }, [displayedRole, isDeleting, roleIndex, charIndex]);

  return (
    <div className="text-3xl my-2 h-24 font-bold tracking-tight">
        {displayedRole}<span className="cursor-animation">|</span>
    </div>
  )
}

export default TypingEffect