import React from 'react'
import { shareLanguages } from './../../utils/shareLanguages';

const Langs = props => {
  const langs = shareLanguages(props.langs)
  
  return <>
      {Object.keys(langs).map(lang => {
        return <span className='badge bg-info text-white mr-3 p-2' key={lang}>
          {lang}: {langs[lang]} %
        </span>
        })}
      </>
  }

export default Langs