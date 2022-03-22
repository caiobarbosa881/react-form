import { useState } from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({ language: 'php', drink: 'cafe' });


  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';
    console.log('*** handleInputChange', name, value, checked);
    setFormValues({ ...formValues, [name]: value });
  
    const data = formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked;
    }

    const newValue = isCheckbox ? data : value;
    console.log('*** handleInputChange', data);
    setFormValues({... formValues, [name]: newValue });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return ( 
    <form onSubmit={ handleSubmit }>
      <input type="text" name='name' placeholder="name" onChange={ handleInputChange } value={formValues.name || ''}></input>
      <input type="text" name='email' placeholder="email" onChange={ handleInputChange } value={formValues.email || ''}></input>
      
      <select name="language" onChange={ handleInputChange } value={formValues.language || ''} >
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="c">C</option>
      </select>    

      <div>
        <label>
        <input type="radio" value="cafe" name='drink' onChange={handleInputChange} checked={formValues.drink === 'cafe'} /> Cafe
        </label>
        <label>
        <input type="radio" value="cha" name='drink' onChange={handleInputChange} checked={formValues.drink === 'cha'} />  Chá
        </label>
      </div>    

      <div className='checks'>
        <label>
          <input type="checkbox" name='social' value="twitter" onChange={handleInputChange}/>
        </label>

        <label>
          <input type="checkbox" name='social' value="twitter" onChange={handleInputChange}/>
        </label>

        <label>
          <input type="checkbox" name='social' value="twitter" onChange={handleInputChange}/>
        </label>
      </div>


      <textarea name='bio' value={formValues.bio || ''} onChange={handleInputChange}></textarea>

      <button type="submit">Enviar</button>
   
    </form>
  );
}

export default App;