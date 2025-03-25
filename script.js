document.getElementById("button").onclick=() =>{
	let name=document.getElementById("name").value;
	let year=document.getElementById("year").value;
	let h3=document.getElementById("url");
	if (name && year)
	{
		// console.log("h") 
		h3.innerHTML= h3.innerHTML+`?name=${name}&year=${year}`;
		// console.log(h3)
	}
	else if(name)
	{
		h3.innerHTML=h3.innerHTML+`?name=${name}`;
	}
	// console.log(name)
	else if(year)
	{
		h3.innerHTML=h3.innerHTML+`?year=${year}`;
	}

}