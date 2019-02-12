export const getAllApiData = () => {
    const status = response => {
        if (response.status >= 200 && response.status < 300) {
            console.log("response.status:", response.status);
            //return the data from fetch 
            return Promise.resolve(response)
        }else
            console.log("response.status:", response.status);

        //returns error in catch
        return Promise.reject(new Error(response.statusText))
    }

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(status)
        .then(response => response.json())
        .then(data => {
            if(data.length > 0){
                return data;
            }
        })
        .catch(error => {
            console.log("api error: ", error);
        });
}
