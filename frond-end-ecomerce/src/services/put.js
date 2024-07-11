const put = async (apiUrl,NameEdit,Description,CategoryEdit,locationEdit,PrecioEdit,imgEditada) => {
    try {
        const response = await fetch(apiUrl,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: NameEdit,
                Description: Description,
                Price: PrecioEdit,
                Category: CategoryEdit,//al hacer un put se envian los valores por separado
                Location: locationEdit,
                imgUrl: imgEditada
            })

        });
        alert('exito')
    } catch (error) {
        console.log(error)
    }
}

export default put