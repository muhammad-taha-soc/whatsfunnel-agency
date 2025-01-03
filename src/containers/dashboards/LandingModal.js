/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './LandingModal.css'; // Ensure you have appropriate styles
import VideoPlayer from 'components/common/VideoPlayer';
import { Card, CardBody, CardTitle } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';

const LandingModal = ({ isOpen, onClose, agencyId }) => { // Assuming agencyId is passed as a prop
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [affiliatedLink, setAffiliatedLink] = useState('');
  const [linkSaved, setLinkSaved] = useState(false);
  const [error, setError] = useState(null); // To track errors
  const [linkExists, setLinkExists] = useState(false); // Track if the link already exists

  const orderId = localStorage.getItem('orderId');
  console.log({ orderId });

  // Check if the affiliated link already exists
  useEffect(() => {
    const checkLinkExists = async () => {
      try {
        const response = await fetch(`http://3.76.225.188:5000/affiliated-link/${orderId}`);
        const { data } = await response.json();
        console.log({ data });

        if (!data?.affiliated_link) {
          setLinkExists(true); // Link already exists, don't show the modal
        } else {
          setLinkExists(false); // Link does not exist, show the modal
        }
      } catch (err) {
        console.error('Error checking if link exists:', err);
        setError('Error checking link existence');
      }
    };


    checkLinkExists();

  }, []);
  console.log({ linkExists });

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const getDaysArray = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = daysInMonth(month, year);
    const firstDay = new Date(year, month, 1).getDay();

    const daysArray = [];
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null); // Fill the start of the week with null
    }

    for (let day = 1; day <= days; day++) {
      daysArray.push(day);
    }

    return daysArray;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const handleTodayClick = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date().getDate());
  };

  const handleApplyClick = () => {
    if (selectedDate) {
      console.log(`Selected date: ${selectedDate}`);
      onClose(); // Close the modal after selection
    }
  };

  const handleAffiliatedLinkChange = (e) => {
    setAffiliatedLink(e.target.value);
    setLinkSaved(false); // Reset the saved state when the link is changed
  };

  const handleSaveAffiliatedLink = async () => {
    if (affiliatedLink.trim()) {
      // Get the orderId from localStorage
      if (!orderId) {
        setError('Order ID not found in localStorage!');
        return;
      }

      try {
        const response = await fetch('http://3.76.225.188:5000/affiliated-link', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            affiliated_link: affiliatedLink,
            agency_id: orderId, // Pass the agencyId as part of the body
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Link saved successfully:', data);
          setLinkSaved(true);
          setError(null); // Reset any previous errors
          setLinkExists(true); // After saving, mark the link as existing
          setTimeout(()=>{

            onClose()
          },2000)
        } else {
          setError(data.message || 'Failed to save the affiliated link');
        }
      } catch (err) {
        setError('Error while saving the link: ' + err.message);
      }
    } else {
      alert('Please enter a valid link');
    }
  };

  const daysArray = getDaysArray();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  let dayArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  let resultArray = [...dayArray, ...daysArray.filter(item => item !== null)];

  return (
    <>
      <div>
        {/* Only show the modal if the link does not exist */}
        {isOpen && linkExists && (
          <div className="modal-overlay" onClick={() => onClose()}>
            <div
              className="modal-content-landing-page"
              style={{ color: 'black' }}
              onClick={(e) => e.stopPropagation()}
            >
              <VideoPlayer
                autoplay={false}
                controls
                className="video-js card-img video-content mb-3"
                poster="/assets/img/video/poster.jpg"
                sources={[
                  {
                    src: 'https://github.com/bower-media-samples/big-buck-bunny-1080p-60fps-30s/raw/master/video.mp4',
                    type: 'video/mp4',
                  },
                ]}
              />
              <div className="text-muted text-one"></div>
              <div className="video-text text-center">
                <span
                  style={{
                    // display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '2px',
                  }}
                >
                  {`Link to affiliate registration : `}
                </span>
                <a href="https://copecart.com/accounts/sign_up?role=affiliate">
                  https://copecart.com/accounts/sign_up?role=affiliate
                </a>
              </div>

              <Card>
                <CardBody className="cal">
                  <div style={{ marginTop: '10px' }}>
                    <label
                      htmlFor="affiliatedLink"
                      style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '2px',
                      }}
                    >
                      Enter Affiliate-ID:
                    </label>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <input
                        type="url"
                        id="affiliatedLink"
                        value={affiliatedLink}
                        onChange={handleAffiliatedLinkChange}
                        placeholder="https://example.com"
                        style={{
                          flex: '1',
                          padding: '8px 12px',
                          fontSize: '14px',
                          border: '1px solid #ccc',
                          borderRadius: '4px',
                          outline: 'none',
                          transition: 'border-color 0.3s ease',
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = '#0DAC8A')
                        }
                        onBlur={(e) => (e.target.style.borderColor = '#ccc')}
                      />
                      <button
                        onClick={handleSaveAffiliatedLink}
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#0DAC8A',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          transition: 'background-color 0.3s ease',
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = '#0a9d76')
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = '#0DAC8A')
                        }
                      >
                        Save
                      </button>
                    </div>
                    {linkSaved && (
                      <p
                        style={{
                          color: 'green',
                          fontSize: '14px',
                          marginTop: '10px',
                        }}
                      >
                        Link saved successfully!
                      </p>
                    )}
                    {error && (
                      <p
                        style={{
                          color: 'red',
                          fontSize: '14px',
                          marginTop: '10px',
                        }}
                      >
                        {error}
                      </p>
                    )}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LandingModal;
