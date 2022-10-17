import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [name, setName]=useState("");
  const [category, setCategory]=useState("Produce");

 function handleChnage(e){
  setName(e.target.value);
 } 

 function handleChnageCategory(e){
  setCategory(e.target.value);
 } 

 function handleSubmit(e){
e.preventDefault();
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: name,
    category: category,
  };
  props.onItemFormSubmit(newItem);
 }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChnage}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleChnageCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
