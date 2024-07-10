const SelectorProvincia = (
    {
        provinciaobj,
        setLocation,
        Location,
    }
) => {
  return (
    <>
         <select 
        value={Location}
        onChange={(event) => setLocation(event.target.value)}
        name="puntoventa"
        id="puntoventa"
      >
        <option value={provinciaobj.Alajuela}>Alajuela</option>
        <option value={provinciaobj.Cartago}>Cartago</option>
        <option value={provinciaobj.Guanacaste}>Guanacaste</option>
        <option value={provinciaobj.Heredia}>Heredia</option>
        <option value={provinciaobj.SanJose}>SanJose</option>
        <option value={provinciaobj.Limon}>Limon</option>
        <option value={provinciaobj.Puntarenas}>Puntarenas</option>
      </select>
    </>
  )
}

export default SelectorProvincia