const HTMLResponse = document.querySelector("#app");
const ul = document.createElement("ul");
const nextPageToken = "";
const paginas = 1;
const key = "AIzaSyCsJNlNqk20digEKhmbmoMtZG2scTE05JA";
const idCanal = "UC7QoKU6bj1QbXQuNIjan82Q"; //"UCdulIs-x_xrRd1ezwJZR9ww";
const cantResults = 100;
const list = "PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh";
const API_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet";

fetch(
  `${API_URL}&channelId=${idCanal}&channelType=channelTypeUnspecified&maxResults=${cantResults}&type=playlist&key=${key}`
)
  .then((res) => res.json())
  .then((yt) => {
    console.log(yt);
    const canal = yt.items;
    canal.map((titulo) => {
      console.log(titulo.snippet);
      const playList = titulo.id.playlistId;
      const canalName = titulo.snippet.channelTitle;
      const channelList = titulo.snippet.channelTitle;
      const titleList = titulo.snippet.title;
      const descriptionList = titulo.description;
      const imgList = titulo.snippet.thumbnails.medium.url;

      const canal_Name = document.querySelector("#canal_title");
      canal_Name.innerHTML = `${canalName}`;
      const dynamic = document.querySelector("#cards");
      dynamic.innerHTML += `
        
        <div class="card col-3 m-1 mx-auto mt-3">
            <img class="img-fluid mt-3" src="${imgList}" alt="Card image cap">

            <div class="card-body">   
                <h4 class="card-title">${channelList}</h4>
                <h5 class="card-title">${titleList}</h5>
                <p class="card-text">${descriptionList}</p>                                
            </div>
            <div class="text-center p-3">
            <a href="https://www.youtube.com/playlist?list=${playList}" target="_blank" class="btn btn-primary mt-3">Ir al Curso</a>
            </div>

        </div>`;
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
