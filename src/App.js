import React from 'react';
import { students } from './students/students.js';
import Student from './Student.jsx';

export default function App(props) {
  const [name, setName] = React.useState("");
  const [data, setData] = React.useState([]);

  const search = React.useRef(null);

  React.useEffect(() => {
    const results = students.filter((student) => {
      return student.nama_lengkap.toLowerCase().indexOf(name) !== -1;
    });
    setData(results);
  }, [name]);

  return (
    <div className='App'>
      <form>
          <input
            type="text"
            ref={search}
          />
          <button 
            type="submit"
            onClick={e => {
              e.preventDefault();
              setName(search.current.value);
            }}
          >
            Cari
          </button>
      </form>

      <div>
        {data.map((student, i) => {
          // console.log(student.nama_lengkap);
          return (<Student
            student={student}
            key={i}
          />)
        })}
      </div>
      
    </div>
  );
}

// Log to console
console.log('Hello console')