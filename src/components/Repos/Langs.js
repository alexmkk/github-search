import React from 'react'
import { shareLanguages } from './../../utils/shareLanguages';

const Langs = props => {
  const langs = shareLanguages(props.langs)
  
  return <>
      {Object.keys(langs).map(lang => {
        const color = langs[lang] > 50 ? 'bg-success' : 'bg-info'
        const classes = ['badge text-white mr-3 p-2']
        classes.push(color)
        
        return <span className={classes.join(' ')} key={lang}>
          {lang}: {langs[lang]} %
        </span>
        })}
      </>
  }

export default Langs