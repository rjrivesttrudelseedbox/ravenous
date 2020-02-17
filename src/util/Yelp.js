// client ID : BLKR28Y4Sw-hEt69TceUPw
// API Key : xg48W6ERkuENMI5pOpOUy4tUWi2KdIck_atyB9XPBSeQth3gfKQYfaIKwm2bBvY865ubVTSyHrCLL0Jj-1abIj3eMLxfRnygLLqqlNCHg8KG-pAVBCKOm026fo9FXnYx

const apiKey = "xg48W6ERkuENMI5pOpOUy4tUWi2KdIck_atyB9XPBSeQth3gfKQYfaIKwm2bBvY865ubVTSyHrCLL0Jj-1abIj3eMLxfRnygLLqqlNCHg8KG-pAVBCKOm026fo9FXnYx";

const yelp ={

    searchYelp (term, location, sortBy,radius)  {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&radius=${radius}`,{
            headers: {
                Authorization: `Bearer ${apiKey}` 
            },
        }).then((responde) => {
            return responde.json();
        }).then((jsonResponse) => {

            if(jsonResponse.businesses) {
    
                return jsonResponse.businesses.map((business) => {
                    console.log(business);
                    return{
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        site: business.url,
                    }
                
                });
            }
        })
    }
}

export default yelp;



