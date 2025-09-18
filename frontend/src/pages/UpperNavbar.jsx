import React, { useState } from 'react';

const UpperNavbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'mwr', name: 'Marwari' },
    { code: 'mtr', name: 'Mewari' }
  ];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.name);
    console.log(`Language changed to: ${language.name} (${language.code})`);
    // You can add your language switching logic here
  };

  return (
    <>  
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid">
          <div className="ms-auto">
            <div className="btn-group" role="group" aria-label="Language selector">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  className={`btn ${
                    selectedLanguage === language.name 
                      ? 'btn-primary' 
                      : 'btn-outline-primary'
                  } btn-sm`}
                  onClick={() => handleLanguageChange(language)}
                >
                  {language.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UpperNavbar;