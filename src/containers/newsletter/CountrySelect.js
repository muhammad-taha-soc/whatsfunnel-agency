import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const countries = [
  { name: 'German', code: 'de', flag: 'https://flagcdn.com/de.svg' },
  { name: 'English', code: 'gb', flag: 'https://flagcdn.com/gb.svg' },
  { name: 'Spanish', code: 'es', flag: 'https://flagcdn.com/es.svg' },
  { name: 'French', code: 'fr', flag: 'https://flagcdn.com/fr.svg' },
  { name: 'Italian', code: 'it', flag: 'https://flagcdn.com/it.svg' },
];

export default function CountrySelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div style={{ position: 'relative', width: '300px' }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '90%',
          borderRadius: '8px',
          border: '1px solid #E5E7EB',
          padding: '8px 12px',
          fontSize: '15px',
          color: '#1F2937',
          outline: 'none',
          cursor: 'pointer',
          backgroundColor: 'white',
        }}
      >
        <img
          src={selectedCountry.flag}
          alt={`${selectedCountry.name} flag`}
          style={{
            width: '24px',
            height: '24px',
            marginRight: '8px',
            borderRadius: '50%', // Ensure circular shape
            objectFit: 'cover', // Ensure the image fits within the bounds
          }}
        />
        <span style={{ flex: 1, textAlign: 'left' }}>
          {selectedCountry.name} {/* Display the country code */}
        </span>
        <FaCaretDown
          style={{ height: '16px', width: '16px', color: '#6B7280' }}
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            marginTop: '4px',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
            backgroundColor: 'white',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
            maxHeight: '240px',
            overflow: 'auto',
            zIndex: 1,
          }}
        >
          {countries.map((country) => (
            <button
              key={country.code}
              type="button"
              onClick={() => {
                setSelectedCountry(country);
                setIsOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 12px',
                fontSize: '15px',
                width: '100%',
                backgroundColor:
                  selectedCountry.code === country.code
                    ? '#F3F4F6'
                    : 'transparent',
                cursor: 'pointer',
                color: '#1F2937',
                border: 'none',
                textAlign: 'left',
              }}
            >
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                style={{
                  width: '24px',
                  height: '24px',
                  marginRight: '8px',
                  borderRadius: '50%', // Ensure circular shape
                  objectFit: 'cover', // Ensure the image fits within the bounds
                }}
              />
              <span style={{ flex: 1 }}>{country.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
