useEffect(() => {
  axios.get("http://localhost:8000/api/products")
    .then(res => {
      console.log(res.data); // Add this to check
      setProducts(res.data);
    })
    .catch(err => console.error(err));
}, []);
