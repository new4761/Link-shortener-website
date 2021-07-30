
export const getShotenLink =  (url) => {
    const headers = {
        Authorization: `${process.env.REACT_APP_TOKEN}`,
        'Content-Type': 'application/json'
    };

    const dataString = JSON.stringify({
        domain: "bit.ly",
        long_url: url
    });

    const option = {
        headers: headers,
        method: 'POST',
        body: dataString,
    };
    return fetch('https://api-ssl.bitly.com/v4/shorten', option)
        .then((response) => response.json())
        .then((responseJSON) => {
            //console.log(responseJSON)
            if (responseJSON.link) {
                return responseJSON.link
            }
            else
                return responseJSON.description
        })

};
