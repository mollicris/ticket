import React, { useState,useEffect, useRef ,forwardRef,useImperativeHandle, use} from 'react'

const Navbar = forwardRef(({ onSearch },ref) => {

  const [search,setSearch] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    console.log("1010useEffect");
  },[search,onSearch]) 

  useImperativeHandle(ref, () => ({
    search
  }));

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
  }
  console.log(search);

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(search);
    }
  }
  return (
    <div 
      ref={ref} style={{
        marginBottom: 14,
        width: '100%',
        display: 'flex',
      }}

    >
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'left',
          }}>
        <p style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
        >Mi boletera</p>
        </div>
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'right',
          }}>
        <input type="text" 
          placeholder="Busca tu evento favorito" 
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={search}
          style={{
            fontSize: 16,
            padding: "6px 12px",
            borderRadius: 4,
            border: "none",
            width: 200,
          }}
        />
        </div>
    </div>
  )
});

export default Navbar