import React,{ useState }  from 'react';
import './App.css';
import InputNumber from './react-ui/InputNumber'
  
  function App(){
    const [value,setValue] = useState('aaa'); 
    return (
	<div>
		<h3>受限:</h3>,
		<br/>
		<InputNumber size='small'
		       value={value}
		/>
		<h3>非受限:</h3>
		<br/>
		<InputNumber
			rule={/\d/}
			size='small' defalutValue={setValue} />	
	</div>
    )
}

export default App;
