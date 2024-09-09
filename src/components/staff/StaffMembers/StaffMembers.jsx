import React, { useEffect, useRef } from 'react';
import './StaffMembers.css';

const StaffMembers = ({ ownerName, ourManager, ourStaff }) => {
  const ownerRef = useRef(null);
  const managerRef = useRef(null);
  const staffRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const iconsRef = useRef(null);
  const historyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      [historyRef,ownerRef, managerRef, staffRef, textRef,titleRef, iconsRef].forEach((ref, index) => {
        const section = ref.current;
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          const triggerPoint = window.innerHeight / 1.3;

          if (sectionTop < triggerPoint) {
            section.classList.add('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container text-center">
      <div ref={historyRef} className='history-section'>
        <h1>our histroy</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officia velit vero deleniti. Eligendi, veritatis. Repellat fugiat laboriosam ullam! Aperiam consequuntur ab illum modi facere soluta, beatae fugit accusamus dignissimos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolore quisquam natus distinctio dignissimos nobis eius, totam cumque praesentium aspernatur porro corporis eaque qui ex. Non eligendi numquam corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident numquam consequatur tempora optio eligendi amet minima, natus deserunt adipisci ratione voluptatem? Temporibus quasi veritatis fuga eveniet dolorum quia voluptas labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, omnis earum aperiam ipsa aut neque inventore. Expedita itaque eveniet culpa unde id. Doloribus ex voluptates culpa, adipisci sunt eligendi autem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et a nihil quos nobis in error mollitia perferendis laborum quae dignissimos reprehenderit atque, similique, explicabo voluptatem rerum at veritatis debitis delectus.</p>
      </div>

      <div ref={ownerRef} className="owner-section">
        <h1>{ownerName}</h1>
        <img className="rounded-circle mb-3" src="owner.jpg" alt="Owner" />
      </div>

      <div ref={managerRef} className="manager-section">
        <h2>{ourManager}</h2>
        <img className="rounded-circle mb-3" src="manager.jpg" alt="Manager" />
      </div>

      <div ref={staffRef} className="staff-members-section row">
        {ourStaff.map((staff,index) => (
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={staff.id}>
            <div className="staff-member p-3  rounded">
            <img
                className="staff-rounded-circle mb-3"
                src={`/staff${index + 1}.jpg`}
                alt={`Staff member ${staff.Name}`}
              />
              <h4>{staff.Name}</h4>
              <h4>{staff.Job}</h4>
            </div>
          </div>
        ))}
      </div>

      <div ref={textRef} className="text-section">
        <p>Unser Engagement für Qualität ist unübertroffen...</p>
      </div>

      <h3 ref={titleRef} className="paymentTitles">Zahlungsverfahren</h3>
      <div ref={iconsRef} className="icon-container">
        <i className="fas fa-coins"></i>
        <i className="fas fa-credit-card"></i>
        
      </div>
    </div>
  );
};

export default StaffMembers;
