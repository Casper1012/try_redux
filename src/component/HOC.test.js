import React, { useState, useEffect } from 'react';

const withData = (WrappedComponent) => {
  const WithData = (props) => {
    const [data, setData] = useState([]);
    console.log("hello");
    console.log("pull request");
    
    useEffect(() => {
      fetch('https://api.example.com/data')
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };

  return WithData;
};