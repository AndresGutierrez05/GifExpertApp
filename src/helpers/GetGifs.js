export const GetGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NP7tm8gj7G8ve0iF6DXKA4P0KdnIyqah&limit=8&q=${ encodeURI(category) }`;
    const result = await fetch(url);
    const { data } = await result.json();
    const listGifs = data.map( img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images?.downsized_medium.url
        }
    });

    return listGifs;
}