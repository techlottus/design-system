const errors: {[key:string]: { error_code:string; default_message:string; default_title:string; image:string; }} = {
  "400": {
    "error_code": "400",
    "default_message": "vuelve a intentarlo",
    "default_title": "lo sentimos algo ocurrio",
    "image": "https://pro-portalverse-lottus.s3.amazonaws.com/ULA/ULA_404_db844d91f9.png"
  },
  "404": {
    "error_code": "404",
    "default_message": "hubo un error inesperado",
    "default_title": "lo sentimos",
    "image": "https://pro-portalverse-lottus.s3.amazonaws.com/ULA/ULA_404_db844d91f9.png"
  }
} 
 export default errors