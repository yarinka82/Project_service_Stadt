/* Об'єднує UI-компоненти */

import React from 'react';
import css from './SearchForm.module.css';

function SearchForm() {
  return (
    <div className={css.formContainer}>
      <p style={{ color: 'white' }}>Hier wird das Suchfeld erscheinen </p>
    </div>
  );
}

export default SearchForm;
