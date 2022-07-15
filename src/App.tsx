import './Globals.scss';
import { Card, CardProps } from  './components/Card';
import { useEffect, useState } from 'react';


function App() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState<CardProps[]>([])
  const [user, setUser] = useState({ name: '', avatar: '' })

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState =>[...prevState, newStudent]);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/IsaacMoretao')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  }, []);

  return (
    <div className="App">
      <div className='Container'>
        <header>
          <strong>LISTA DE PRESENÇA</strong>
          <div>
            <span>{user.name}</span>
            <img src={user.avatar} alt="Usuario" />
          </div>
        </header>
        
        <input
          type="text"
          placeholder='Digite o nome...'
          onChange={e => setStudentName(e.target.value) }
        />
        <button onClick={handleAddStudent}>
          Submit
        </button>
        
      </div>
      {
        students.map(student =>
          <Card
          key={student.time}
          name={student.name}
          time={student.time}
        />)
      }
       
    </div>
  )
}

export default App
