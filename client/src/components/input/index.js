/**
 *
 * Input
 *
 */

import React from 'react';
import Rating from '@mui/material/Rating'
import ReactStars from 'react-rating-stars-component';

import '../../assets/styles/input.css'

const Input = (props) => {
  const {
    autoComplete,
    type,
    value,
    error,
    decimals,
    min,
    max,
    disabled,
    placeholder,
    rows,
    label,
    name,
    onInputChange,
    inlineElement
  } = props;

  const _onChange = e => {
    if (e.target.name == 'image') {
      onInputChange(e.target.name, e.target.files[0]);
    } else {
      onInputChange(e.target.name, e.target.value);
    }
  };

  if (type === 'textarea') {

    return (
      <div>
        {label && <label>{label}</label>}
        <textarea
          type={'textarea'}
          onChange={e => {
            _onChange(e);
          }}
          rows={rows}
          name={name}
          value={value}
          placeholder={placeholder}
          className={'textarea-text w-full customInput'}
        />
        <span className='invalid-message'>{error && error[0]}</span>
      </div>
    );
  } else if (type === 'number') {
    const styles = `input-box${error ? ' invalid' : ''}`;

    const handleOnInput = e => {
      if (!decimals) {
        e.target.value = e.target.value.replace(/[^0-9]*/g, '');
      }
    };
    return (
      <div className={styles}>
        {label && <label>{label}</label>}
        <input
          autoComplete={autoComplete}
          step='step'
          min={min || 0}
          max={max || null}
          pattern='[0-9]'
          onInput={handleOnInput}
          type={type}
          onChange={e => {
            _onChange(e);
          }}
          disabled={disabled}
          name={name}
          value={value}
          placeholder={placeholder}
          className={'input-number customInput'}
        />
        <span className='invalid-message'>{error && error[0]}</span>
      </div>
    );
  } else if (type === 'stars') {
    const styles = `input-box${error ? ' invalid' : ''}`;

    return (
      <div className={styles}>
        {label && <label>{label}</label>}
        <div>
          <Rating name = { name} 
                  value = { value }
                  onChange = {( event, newValue ) =>{
                    _onChange( event )
                  }}
          />
          
        </div>
        <span className='invalid-message'>{error && error[0]}</span>
      </div>
    );
  } else {

    return (
      <div>
        {label && <label >{label}</label>}
        <div className='input-text-block'>
          <input
            className={'px-2 py-2 w-100 customInput'}
            styles = {{ borderColor: '#bdcbd2', '&:focus': { border: '2px solid blue'}}}
            autoComplete={autoComplete}
            type={type}
            onChange={e => {
              _onChange(e);
            }}
            disabled={disabled}
            name={name}
            value={value}
            placeholder={placeholder}
          />
          {inlineElement}
        </div>
        <span className='invalid-message'>{error && error[0]}</span>
      </div>
    );
  }
};

Input.defaultProps = {
  step: 1,
  decimals: true,
  rows: '4',
  inlineElement: null,
  autoComplete: 'on'
};

export default Input;