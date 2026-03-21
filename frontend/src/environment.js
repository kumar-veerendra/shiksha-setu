// let IS_PROD = false;
// const server = IS_PROD ?
//     "https://apnacollegebackend.onrender.com" :

//     "http://localhost:8000"


// export default server;

// let IS_PROD = false;

// const server = IS_PROD
//   ? "https://apnacollegebackend.onrender.com"
//   : "http://localhost:8000";  // ✅ your laptop IP

// export default server;

let IS_PROD = true;

const server = IS_PROD
  ? "https://shiksha-setu-production.up.railway.app"
  : "http://localhost:8000";

export default server;
