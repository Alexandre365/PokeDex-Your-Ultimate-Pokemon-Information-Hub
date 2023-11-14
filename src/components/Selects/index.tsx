

export default function Select({i}: {i: Array<any>}) {
  return (
    <select name="Type" id="">
      {i.map((item, index) =>(
        <option value={item} key={index}>{item}</option>
      ))}
    </select>
  );
}

