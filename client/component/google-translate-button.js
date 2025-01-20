import React, { useEffect } from "react";

const GoogleTranslatePage = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en", // Source language
            includedLanguages: "ta", // Restrict to Tamil
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  const handleTranslateClick = () => {
    const translateElement = document.getElementById("google_translate_element");
    if (translateElement) {
      translateElement.style.display =
        translateElement.style.display === "none" ? "block" : "none";
    }
  };

  return (
    <div className="pos-r top df fjfe">
      <button 
        onClick={handleTranslateClick}
        className={'google-btn df fac fs-12'}
        
      >
        Translate Page to Tamil
      </button>
      <div
        id="google_translate_element"
        className="mt20 dn "
      ></div>
      <style jsx>
        {`
        .google-btn{
        background:#006c35;
        border-radius: 6px;
        padding: 5px;
        color: #fff;
        border: none;
        }
        .top{
        top: 0px;
        }
        `}
      </style>
    </div>
  );
};

export default GoogleTranslatePage;
