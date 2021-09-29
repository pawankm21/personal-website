import React from 'react';
import './css/preloader.css'
import Typist from 'react-typist';
export default function Preloader()
{
    return (
      <div className="spinner">
        <Typist
          cursor={{
            show: false,
            hideWhenDone: true,
          }}
        >
          <span>Booting...</span>
        </Typist>
        <div className="half-spinner"></div>
      </div>
    );
}