document.addEventListener('DOMContentLoaded',function(){
	let products=document.querySelector(".kall")
	async function fetchfunk(url){
		try{
			let data=await fetch(url)
			let response=await data.json()
			console.log(response)
			for (let i=0;i<response.length; i++){
				title=response[i].title
				discription=response[i].description
				products.innerHTML +=`
				<div class="product">
				  
				 <img src=${response[i].images[0]} alt=${ response[i].category.name} class="imger"/>
				<div class="productds" >
				
				<h3 class="title">${title.length > 18 ? title.substring(0, 18).concat(' ... more') : title}</h3>
				<h3 class="disc">${discription.length >50 ? discription.substring(0,60).concat("....more"):discription}</h3>
				<div class="pricecantainer">
				 <h3 class="price">${response[i].price +" INR"}</h3>
				 <button>add to cart</button>
				</div>

				</div>
				
				
				</div>


				`
			}

		}
		catch (err){
			console.log(err)

		}
	}
	fetchfunk("https://api.escuelajs.co/api/v1/products")
})


